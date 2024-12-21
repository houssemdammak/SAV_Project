using Microsoft.AspNetCore.Mvc;
using SAV_Backend.Dto;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ArticleController : ControllerBase
    {
        private readonly IArticleService _articleService;

        public ArticleController(IArticleService articleService)
        {
            _articleService = articleService;
        }

        // GET: api/Article
        [HttpGet]
        public async Task<IActionResult> GetAllArticles()
        {
            var articles = await _articleService.GetArticles();
            return Ok(articles);
        }

        // GET: api/Article/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetArticleById(int id)
        {
            var article = await _articleService.GetArticleById(id);
            if (article == null)
            {
                return NotFound(new { message = "Article not found." });
            }

            return Ok(article);
        }

        // POST: api/Article
        [HttpPost]
        public async Task<IActionResult> CreateArticle([FromBody] ArticleCreateModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _articleService.CreateArticle(model);
            if (result)
            {
                return CreatedAtAction(nameof(GetArticleById), new { id = model.Id }, model);
            }

            return StatusCode(500, new { message = "An error occurred while creating the article." });
        }

        // PUT: api/Article/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateArticle(int id, [FromBody] Article updatedArticle)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _articleService.UpdateArticle(id, updatedArticle);
            if (!result)
            {
                return NotFound(new { message = "Article not found or could not be updated." });
            }

            return NoContent();
        }

        // DELETE: api/Article/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticle(int id)
        {
            var result = await _articleService.DeleteArticle(id);
            if (!result)
            {
                return NotFound(new { message = "Article not found or could not be deleted." });
            }

            return NoContent();
        }
    }
}
