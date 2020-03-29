namespace AskForMasksCoreVue
{
    using System.Threading.Tasks;
    using AzureMapsToolkit;
    using AzureMapsToolkit.Search;
    using Microsoft.AspNetCore.Server.IIS;
    using Microsoft.Azure.Cosmos.Spatial;
    using Microsoft.Extensions.Configuration;
    using Models;

    public interface IGeocodingProvider
    {
        Task Locate(MaskRequest request);
    }

    public class AzureMapsGeocodingProvider : IGeocodingProvider
    {
        private readonly string _subscriptionKey;

        public AzureMapsGeocodingProvider(IConfiguration config)
        {
            _subscriptionKey = config["AzureMapsKey"];
        }

        public async Task Locate(MaskRequest request)
        {
            var am = new AzureMapsServices(_subscriptionKey);
            var searchAddressRequest = new SearchAddressRequest
            {
                Query = $"{request.Organization.AddressLine1} {request.Organization.City} {request.Organization.State} {request.Organization.ZipCode}",
                Limit = 1,
                CountrySet = "US"
            };

            var resp = await am.GetSearchAddress(searchAddressRequest);
            var lat = resp.Result.Results[0].Position.Lat;
            var lon = resp.Result.Results[0].Position.Lon;
            request.Organization.Geolocation = new Point(lon, lat);
        }
    }
}
