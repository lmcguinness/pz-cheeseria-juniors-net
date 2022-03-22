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
        private static RecentPurchases _recentPurchases = new RecentPurchases();

        [HttpGet]
        [ProducesResponseType(typeof(Cheese[]), 200)]
        public IActionResult GetCheeses()
        {
            return Ok(CheesesRepository.Cheeses);
        }

        [HttpPost("api/purchaseItem")]
        [ProducesResponseType(typeof(Cheese[]), 200)]
        public IActionResult purchaseItem(Cheese[] itemsPurchased)
        {
            _recentPurchases.setItemsPurchased(itemsPurchased);
            return Ok();
        }

        [HttpGet("api/recentItemsPurchased")]
        [ProducesResponseType(typeof(Cheese[]), 200)]
        public IActionResult getItemsPurchased()
        {
            var recentPurchases = _recentPurchases.getItemsPurchased();
            return Ok(recentPurchases);
        }

    }
}