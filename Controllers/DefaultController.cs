namespace AskForMasksCoreVue.Controllers
{
    using System;
    using Microsoft.Extensions.Configuration;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Models;

    [ApiController]
    public class DefaultController : ControllerBase
    {
        private readonly IDataProvider _dataProvider;
        private readonly IGeocodingProvider _geocodingProvider;

        public DefaultController(IConfiguration config)
        {
            _dataProvider = new CosmosDbDataProvider(config);
            _geocodingProvider = new AzureMapsGeocodingProvider(config);
        }

        [HttpGet]
        [Route("/api/requests")]
        public async Task<MaskRequest[]> AllRequests()
        {
            return await _dataProvider.GetRequests(100);
        }

        [HttpGet]
        [Route("/api/requests/{count}")]
        public async Task<MaskRequest[]> SomeRequests(int count)
        {
            return await _dataProvider.GetRequests(count);
        }

        [HttpPost]
        [Route("/api/request")]
        public async Task SaveRequest([FromBody]MaskRequest request)
        {
            if (string.IsNullOrEmpty(request.Id))
            {
                request.Id = Guid.NewGuid().ToString();
                request.RequestDate = DateTime.Now;
            }

            await _geocodingProvider.Locate(request);
            await _dataProvider.SaveRequest(request);
        }

        [HttpGet]
        [Route("/api/brags")]
        public async Task<Brag[]> AllBrags()
        {
            return await _dataProvider.GetBrags(100);
        }

        [HttpGet]
        [Route("/api/brags/{count}")]
        public async Task<Brag[]> SomeBrags(int count)
        {
            return await _dataProvider.GetBrags(count);
        }

        [HttpPost]
        [Route("/api/brag")]
        public async Task SaveBrag([FromBody]Brag brag)
        {
            brag.Id = Guid.NewGuid().ToString();
            brag.SubmittedDate = DateTime.Now;
            await _dataProvider.SaveBrag(brag);
        }

        [HttpPost]
        [Route("/api/message")]
        public async Task SaveMessage([FromBody] Message message)
        {
            message.Id = Guid.NewGuid().ToString();
            message.SubmittedDate = DateTime.Now;
            await _dataProvider.SaveMessage(message);
        }

        [HttpDelete]
        [Route("/api/request/{id}")]
        public void Delete(int id)
        {

        }
    }
}
