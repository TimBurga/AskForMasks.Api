namespace AskForMasksCoreVue
{
    using System.Threading.Tasks;
    using AzureMapsToolkit;
    using AzureMapsToolkit.Search;
    using Microsoft.Azure.Cosmos.Spatial;
    using Microsoft.Extensions.Configuration;
    using Models;

    public interface IGeocodingProvider
    {
        Task Locate(MaskRequest request);
        Task<Point> GeocodeZip(string zipCode);
    }

    public class AzureMapsGeocodingProvider : IGeocodingProvider
    {
        private readonly AzureMapsServices _mapService;

        public AzureMapsGeocodingProvider(IConfiguration config)
        {
            _mapService = new AzureMapsServices(config["AzureMapsKey"]);
        }

        public async Task Locate(MaskRequest request)
        {
            var searchAddressRequest = new SearchAddressRequest
            {
                Query = $"{request.Organization.AddressLine1} {request.Organization.City} {request.Organization.State} {request.Organization.ZipCode}",
                Limit = 1,
                CountrySet = "US"
            };

            var resp = await _mapService.GetSearchAddress(searchAddressRequest);
            var lat = resp.Result.Results[0].Position.Lat;
            var lon = resp.Result.Results[0].Position.Lon;
            request.Organization.Geolocation = new Point(lon, lat);
        }

        public async Task<Point> GeocodeZip(string zipCode)
        {
            var searchAddressRequest = new SearchAddressRequest {Query = zipCode, Limit = 100, CountrySet = "US"};
            var resp = await _mapService.GetSearchAddress(searchAddressRequest);
            var lat = resp.Result.Results[0].Position.Lat;
            var lon = resp.Result.Results[0].Position.Lon;
            return new Point(lon, lat);
        }
    }
}
