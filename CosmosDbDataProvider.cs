namespace AskForMasksCoreVue
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.Azure.Cosmos;
    using Microsoft.Azure.Cosmos.Spatial;
    using Microsoft.Extensions.Configuration;
    using Models;

    public interface IDataProvider
    {
        MaskRequest[] GetRequests(int count);
        ZipSearchResult[] GetRequestsByZipCode(Point point, string originZip, int radiusInMiles);
        Brag[] GetBrags(int count);
        int GetRequestCount();

        Task SaveRequest(MaskRequest request);
        Task SaveBrag(Brag brag);
        Task SaveMessage(Message message);
        void BulkImport(BulkImportRequest bulk);
    }

    public class CosmosDbDataProvider : IDataProvider
    {
        private readonly IGeocodingProvider _geocodingProvider;
        private readonly Container _requestContainer;
        private readonly Container _bragContainer;
        private readonly Container _messageContainer;
        private int _maxRecordsToReturn = 100;

        public CosmosDbDataProvider(IConfiguration config, IGeocodingProvider geocodingProvider)
        {
            _geocodingProvider = geocodingProvider;
            var cosmosClient = new CosmosClient(config["EndpointUri"], config["PrimaryKey"], new CosmosClientOptions
            {
                ApplicationName = "AskForMasks",
                SerializerOptions = new CosmosSerializationOptions
                {
                    PropertyNamingPolicy = CosmosPropertyNamingPolicy.CamelCase
                }
            });

            _requestContainer = cosmosClient.GetContainer(config["DatabaseId"], config["RequestContainerId"]);
            _bragContainer = cosmosClient.GetContainer(config["DatabaseId"], config["BragContainerId"]);
            _messageContainer = cosmosClient.GetContainer(config["DatabaseId"], config["MessageContainerId"]);
        }

        public MaskRequest[] GetRequests(int count = 100)
        {
            var results = _requestContainer
                .GetItemLinqQueryable<MaskRequest>(true)
                .OrderByDescending(x => x.RequestDate)
                .Take(Math.Min(count, _maxRecordsToReturn))
                .ToArray();

            return results;
        }

        public ZipSearchResult[] GetRequestsByZipCode(Point point, string originZip, int radiusInMiles)
        {
            var searchResults = _requestContainer
                .GetItemLinqQueryable<MaskRequest>(true)
                .Where(r => r.Organization.Geolocation.Distance(point) < radiusInMiles * 1609.34)
                .Select(r => new ZipSearchResult
                {
                    OriginZip = originZip,
                    DistanceInMiles = r.Organization.Geolocation.Distance(point) / 1609.34,
                    Request = r
                })
                .ToList();

            searchResults.ForEach(s => s.DistanceInMiles = Math.Round(s.DistanceInMiles, MidpointRounding.AwayFromZero));
            
            return searchResults
                .OrderBy(r => r.DistanceInMiles)
                .Take(_maxRecordsToReturn)
                .ToArray();
        }

        public Brag[] GetBrags(int count = 100)
        {
            var brags = _bragContainer
                .GetItemLinqQueryable<Brag>(true)
                .OrderByDescending(x => x.SubmittedDate)
                .Take(Math.Min(count, _maxRecordsToReturn))
                .ToArray();

            return brags;
        }

        public int GetRequestCount()
        {
            return _requestContainer
                .GetItemLinqQueryable<object>(true)
                .Count();
        }

        public async Task SaveRequest(MaskRequest request)
        {
            if (string.IsNullOrEmpty(request.Id))
            {
                request.Id = Guid.NewGuid().ToString();
                request.RequestDate = DateTime.Now;
            }

            await _geocodingProvider.Locate(request);
            await _requestContainer.UpsertItemAsync(request);
        }

        public async Task SaveBrag(Brag brag)
        {
            brag.Id = Guid.NewGuid().ToString();
            brag.SubmittedDate = DateTime.Now;
            await _bragContainer.CreateItemAsync(brag);
        }

        public async Task SaveMessage(Message message)
        {
            message.Id = Guid.NewGuid().ToString();
            message.SubmittedDate = DateTime.Now;
            await _messageContainer.CreateItemAsync(message);
        }

        public void BulkImport(BulkImportRequest bulk)
        {
            foreach (var request in bulk.Requests)
            {
                var name = request.Organization.Name;
                var city = request.Organization.City;
                var state = request.Organization.State;

                var existing = _requestContainer
                    .GetItemLinqQueryable<MaskRequest>(true)
                    .Where(x => x.Organization.Name == name
                              && x.Organization.City == city
                              && x.Organization.State == state)
                    .Select(x => x)
                    .ToList();

                if (existing.Any())
                {
                    request.Id = existing.First().Id;
                    _requestContainer.UpsertItemAsync(request);
                }
                else
                {
                    _geocodingProvider.Locate(request);

                    request.Id = Guid.NewGuid().ToString();
                    request.RequestDate = DateTime.Now;
                    _requestContainer.UpsertItemAsync(request);
                }
            }
        }
    }
}
