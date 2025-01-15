using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SAV_Backend.Interfaces;

namespace SAV_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Client,ResponsableSAV")]
    public class PieceController : ControllerBase
    {
        private readonly IPieceService _Service;

        public PieceController(IPieceService Service)
        {
            _Service = Service;
        }

        // GET: api/Article
        [HttpGet]
        public async Task<IActionResult> GetPieces()
        {
            var service = await _Service.GetPieces();
            return Ok(service);
        }

        // GET: api/Article/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPieceById(int id)
        {
            var service = await _Service.GetPieceById(id);
            if (service == null)
            {
                return NotFound(new { message = "service not found." });
            }

            return Ok(service);
        }
    }
}
