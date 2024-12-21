using Microsoft.AspNetCore.Mvc;
using SAV_Backend.Dto;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResponsableController : ControllerBase
    {
        private readonly IResponsableService _responsableService;

        public ResponsableController(IResponsableService responsableService)
        {
            _responsableService = responsableService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ResponsableSAV>>> GetResponsables()
        {
            var responsables = await _responsableService.GetResponsables();
            return Ok(responsables);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ResponsableSAV>> GetResponsableById(int id)
        {
            var responsable = await _responsableService.GetResponsableById(id);
            if (responsable == null)
                return NotFound();

            return Ok(responsable);
        }

        [HttpPost]
        public async Task<IActionResult> CreateResponsable(ResponsableCreateModel model)
        {
            var success = await _responsableService.CreateResponsable(model);
            if (success)
                return Ok("User and Responsable created successfully.");

            return BadRequest("Error creating Responsable.");
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateResponsable(int id, ResponsableSAV responsable)
        {
            var success = await _responsableService.UpdateResponsable(id, responsable);
            if (!success)
                return BadRequest("Invalid responsable ID or data.");

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResponsable(int id)
        {
            var success = await _responsableService.DeleteResponsable(id);
            if (!success)
                return NotFound();

            return NoContent();
        }
    
}
}
