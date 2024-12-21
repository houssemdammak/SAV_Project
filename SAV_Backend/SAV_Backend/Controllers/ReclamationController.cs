﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SAV_Backend.Dto;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReclamationController : ControllerBase
    {
        private readonly IReclamationService _reclamationService;

        public ReclamationController(IReclamationService reclamationService)
        {
            _reclamationService = reclamationService;
        }

        // GET: api/Reclamation
        [HttpGet]
        public async Task<IActionResult> GetAllReclamations()
        {
            var reclamations = await _reclamationService.GetReclamations();
            return Ok(reclamations);
        }

        // GET: api/Reclamation/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReclamationById(int id)
        {
            var reclamation = await _reclamationService.GetReclamationById(id);

            if (reclamation == null)
            {
                return NotFound(new { message = "Reclamation not found." });
            }

            return Ok(reclamation);
        }

        // POST: api/Reclamation
        [HttpPost]
        public async Task<IActionResult> CreateReclamation([FromBody] ReclamationCreateModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return validation errors
            }

            var result = await _reclamationService.CreateReclamation(model);

            if (result)
            {
                return CreatedAtAction(nameof(GetReclamationById), new { id = model.Id }, model);
            }

            return StatusCode(500, new { message = "An error occurred while creating the reclamation." });
        }
        // DELETE: api/Reclamation/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReclamation(int id)
        {
            var result = await _reclamationService.DeleteReclamation(id);
            if (!result)
            {
                return NotFound(new { message = "Reclamation not found or could not be deleted." });
            }

            return NoContent(); // Successfully deleted
        }

        // PUT: api/Reclamation/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateReclamation(int id, [FromBody] Reclamation updatedReclamation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return validation errors
            }

            var result = await _reclamationService.UpdateReclamation(id, updatedReclamation);
            if (!result)
            {
                return NotFound(new { message = "Reclamation not found or could not be updated." });
            }

            return NoContent(); // Successfully updated
        }


    }
}
