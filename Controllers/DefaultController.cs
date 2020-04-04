namespace AskForMasksCoreVue.Controllers
{
    using System;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Models;

    [ApiController]
    public class DefaultController : ControllerBase
    {
        private readonly IDataProvider _dataProvider;
        private readonly IGeocodingProvider _geocodingProvider;

        public DefaultController(IDataProvider dataProvider, IGeocodingProvider geocodingProvider)
        {
            _dataProvider = dataProvider;
            _geocodingProvider = geocodingProvider;
        }

        [HttpGet]
        [Route("/api/requests")]
        public MaskRequest[] AllRequests()
        {
            return _dataProvider.GetRequests(100);
        }

        [HttpGet]
        [Route("/api/requests/count")]
        public int RequestCount()
        {
            return _dataProvider.GetRequestCount();
        }

        [HttpGet]
        [Route("/api/requests/{count}")]
        public MaskRequest[] SomeRequests(int count)
        {
            return _dataProvider.GetRequests(count);
        }

        [HttpGet]
        [Route("/api/requests/byzip/{zipCode}/distance/{radius}")]
        public async Task<ZipSearchResult[]> RequestsByZipCode(string zipCode, int radius)
        {
            var point = await _geocodingProvider.GeocodeZip(zipCode);
            return _dataProvider.GetRequestsByZipCode(point, zipCode, radius);
        }

        [HttpPost]
        [Route("/api/request")]
        public async Task SaveRequest([FromBody]MaskRequest request)
        {
            await _dataProvider.SaveRequest(request);
        }

        [HttpPost]
        [Route("/api/request/bulk")]
        public void ImportRequests([FromBody] BulkImportRequest requests)
        {
            _dataProvider.BulkImport(requests);
        }

        [HttpGet]
        [Route("/api/brags")]
        public Brag[] AllBrags()
        {
            return _dataProvider.GetBrags(100);
        }

        [HttpGet]
        [Route("/api/brags/{count}")]
        public Brag[] SomeBrags(int count)
        {
            return _dataProvider.GetBrags(count);
        }

        [HttpPost]
        [Route("/api/brag")]
        public async Task SaveBrag([FromBody]Brag brag)
        {
            await _dataProvider.SaveBrag(brag);
        }

        [HttpPost]
        [Route("/api/message")]
        public async Task SaveMessage([FromBody] Message message)
        {
            await _dataProvider.SaveMessage(message);
        }

        [HttpDelete]
        [Route("/api/request/{id}")]
        public void Delete(int id)
        {

        }
    }
}
