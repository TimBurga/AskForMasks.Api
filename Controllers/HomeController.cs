namespace AskForMasksCoreVue.Controllers
{
    using System.Net;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;
    using System.Threading.Tasks;

    public class HomeController : Controller
    {
        //private readonly IMaskRequestProvider _requestProvider;

        //public HomeController(ILogger<HomeController> logger, IConfiguration config)
        //{
        //    _requestProvider = new CosmosDbMaskRequestProvider(config);
        //}

        public IActionResult Index()
        {
            return View();
        }

        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        //public IActionResult Error()
        //{
        //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}

        //[HttpGet]
        //public async Task<MaskRequest[]> AllRequests()
        //{
        //    return await _requestProvider.GetAllRequests();
        //}

        //[HttpPost]
        //[Route("/request")]
        //public async Task<HttpStatusCode> SaveRequest([FromBody]MaskRequest request)
        //{
        //    return await _requestProvider.SaveRequest(request);
        //}
    }
}
