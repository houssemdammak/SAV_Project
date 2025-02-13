﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SAV_Backend.Dto;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    

    public class ClientController : ControllerBase
    {
        private readonly IClientService _clientService;

        public ClientController(IClientService clientService)
        {
            _clientService = clientService;
        }

        [HttpGet]
        [Authorize(Roles = "ResponsableSAV")]
        public async Task<ActionResult<IEnumerable<Client>>> GetClients()
        {
            var clients = await _clientService.GetClients();
            return Ok(clients);
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "ResponsableSAV")]
        public async Task<ActionResult<Client>> GetClient(int id)
        {
            var client = await _clientService.GetClientById(id);
            if (client == null)
                return NotFound();

            return Ok(client);
        }

        [HttpPost]
        [Authorize(Roles = "Client")]
        public async Task<IActionResult> CreateClient(ClientCreateModel model)
        {
            var result = await _clientService.CreateClient(model);
            if (result!= "Success")
                return BadRequest(result);
            else
            {
                return Ok();

            }
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "ResponsableSAV")]
        public async Task<IActionResult> UpdateClient(int id, Client client)
        {
            var success = await _clientService.UpdateClient(id, client);
            if (!success) 
                return BadRequest("Invalid client ID or data.");

            
            return NoContent();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "ResponsableSAV")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            var success = await _clientService.DeleteClient(id);
            if (!success)
                return NotFound();

            return NoContent();
        }
        [HttpGet("articles/{clientId}")]
        [Authorize(Roles = "Client,ResponsableSAV")]
        public async Task<ActionResult<IEnumerable<Article>>> GetArticles(int clientId)
        {
            
            var articles = await _clientService.GetArticles(clientId);
            if (articles==null) {
                return NotFound("Articles not found");
            }
                
            return Ok(articles);
        }

    }
}
