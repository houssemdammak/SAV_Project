using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientArticleController : ControllerBase
    {
        private readonly IClientArticleService _clientArticleService;

        public ClientArticleController(IClientArticleService clientArticleService)
        {
            _clientArticleService = clientArticleService;
        }

        // GET: api/ClientArticle
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientArticle>>> GetAll()
        {
            var clientArticles = await _clientArticleService.GetAllAsync();
            return Ok(clientArticles);
        }

        // GET: api/ClientArticle/5/10
        [HttpGet("{clientId}/{articleId}")]
        public async Task<ActionResult<ClientArticle>> Get(int clientId, int articleId)
        {
            var clientArticle = await _clientArticleService.GetByIdsAsync(clientId, articleId);
            if (clientArticle == null)
            {
                return NotFound();
            }
            return Ok(clientArticle);
        }

        // POST: api/ClientArticle
        [HttpPost]
        public async Task<ActionResult<ClientArticle>> Create(ClientArticle clientArticle)
        {
            var createdClientArticle = await _clientArticleService.CreateAsync(clientArticle);
            // return CreatedAtAction(nameof(Get), new { clientId = createdClientArticle.ClientId, articleId = createdClientArticle.ArticleId }, createdClientArticle);
            return Ok(clientArticle);
        }

        // PUT: api/ClientArticle/5/10
        [HttpPut("{clientId}/{articleId}")]
        public async Task<IActionResult> Update(int clientId, int articleId, ClientArticle clientArticle)
        {
            if (clientId != clientArticle.ClientId || articleId != clientArticle.ArticleId)
            {
                return BadRequest();
            }

            await _clientArticleService.UpdateAsync(clientArticle);
            return NoContent();
        }

        // DELETE: api/ClientArticle/5/10
        [HttpDelete("{clientId}/{articleId}")]
        public async Task<IActionResult> Delete(int clientId, int articleId)
        {
            var deleted = await _clientArticleService.DeleteAsync(clientId, articleId);
            if (!deleted)
            {
                return NotFound();
            }
            return NoContent();
        }
    
}
}
