using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SAV_Backend.Dto;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class InterventionController : ControllerBase
    {
        private readonly IInterventionService _interventionService;

        public InterventionController(IInterventionService interventionService)
        {
            _interventionService = interventionService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllInterventions()
        {
            var interventions = await _interventionService.GetAllInterventionsAsync();
            return Ok(interventions);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetInterventionById(int id)
        {
            try
            {
                var intervention = await _interventionService.GetInterventionByIdAsync(id);
                return Ok(intervention);
            }
            catch (KeyNotFoundException e)
            {
                return NotFound(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateIntervention([FromBody] InterventionCreateModel intervention)
        {
            try
            {
                var createdIntervention = await _interventionService.CreateInterventionAsync(intervention);
                return CreatedAtAction(nameof(GetInterventionById), new { id = createdIntervention.Id }, createdIntervention);
            }
            catch (KeyNotFoundException e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIntervention(int id)
        {
            var result = await _interventionService.DeleteInterventionAsync(id);

            if (!result)
            {
                return NotFound($"Intervention with ID {id} not found.");
            }

            return NoContent();
        }

    }

}
