namespace AskForMasksCoreVue
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Microsoft.Azure.Cosmos;
    using Microsoft.Extensions.Configuration;
    using Models;

    public interface IDataProvider
    {
        Task<MaskRequest[]> GetRequests(int count);
        Task<Brag[]> GetBrags(int count);

        Task SaveRequest(MaskRequest request);
        Task SaveBrag(Brag brag);
        Task SaveMessage(Message message);
    }

    public class CosmosDbDataProvider : IDataProvider
    {
        private readonly CosmosClient _cosmosClient;
        private readonly string _databaseId;
        private readonly string _requestContainerId;
        private readonly string _bragContainerId;
        private readonly string _messageContainerId;
        private int _maxRecordsToReturn = 100;

        public CosmosDbDataProvider(IConfiguration config)
        {
            _cosmosClient = new CosmosClient(config["EndpointUri"], config["PrimaryKey"], new CosmosClientOptions
            {
                ApplicationName = "AskForMasks",
                SerializerOptions = new CosmosSerializationOptions
                {
                    PropertyNamingPolicy = CosmosPropertyNamingPolicy.CamelCase
                }
            });
            _databaseId = config["DatabaseId"];
            _requestContainerId = config["RequestContainerId"];
            _bragContainerId = config["BragContainerId"];
            _messageContainerId = config["MessageContainerId"];
        }

        public async Task<MaskRequest[]> GetRequests(int count = 100)
        {
            var requestContainer = _cosmosClient.GetContainer(_databaseId, _requestContainerId);
            var queryDefinition = new QueryDefinition($"SELECT * FROM MaskRequests ORDER BY MaskRequests.requestDate DESC");

            var options = new QueryRequestOptions { MaxItemCount = Math.Min(count, _maxRecordsToReturn) };
            var queryResultSetIterator = requestContainer.GetItemQueryIterator<MaskRequest>(queryDefinition, requestOptions: options);

            var providers = new List<MaskRequest>();

            while (queryResultSetIterator.HasMoreResults)
            {
                var currentResultSet = await queryResultSetIterator.ReadNextAsync();
                providers.AddRange(currentResultSet);
            }

            return providers.ToArray();
        }

        public async Task<Brag[]> GetBrags(int count = 100)
        {
            var bragContainer = _cosmosClient.GetContainer(_databaseId, _bragContainerId);
            var queryDefinition = new QueryDefinition($"SELECT * FROM Brags ORDER BY Brags.submittedDate DESC");
            
            var options = new QueryRequestOptions { MaxItemCount = Math.Min(count, _maxRecordsToReturn) };
            var queryResultSetIterator = bragContainer.GetItemQueryIterator<Brag>(queryDefinition, requestOptions: options);

            var brags = new List<Brag>();

            while (queryResultSetIterator.HasMoreResults)
            {
                var currentResultSet = await queryResultSetIterator.ReadNextAsync();
                brags.AddRange(currentResultSet);
            }

            return brags.ToArray();
        }

        public async Task SaveRequest(MaskRequest request)
        {
            var requestContainer = _cosmosClient.GetContainer(_databaseId, _requestContainerId);
            await requestContainer.UpsertItemAsync(request);
        }

        public async Task SaveBrag(Brag brag)
        {
            var feedbackContainer = _cosmosClient.GetContainer(_databaseId, _bragContainerId);
            await feedbackContainer.CreateItemAsync(brag);
        }

        public async Task SaveMessage(Message message)
        {
            var messageContainer = _cosmosClient.GetContainer(_databaseId, _messageContainerId);
            await messageContainer.CreateItemAsync(message);
        }
    }
}
