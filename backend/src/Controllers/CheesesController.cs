using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Pz.Cheeseria.Api.Data;
using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheesesController : ControllerBase
    {
        //private purchasedItems;

        [HttpGet]
        [ProducesResponseType(typeof(Cheese[]), 200)]
        public IActionResult GetCheeses()
        {
            return Ok(CheesesRepository.Cheeses);
        }

        [HttpPost]
        [ProducesResponseType(typeof(Cheese[]), 200)]
        public IActionResult purchaseItem(Cheese[] itemsPurchased)
        {
            var purchasedItems = itemsPurchased;
            return Ok();
        }
    }
}