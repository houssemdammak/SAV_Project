using Microsoft.EntityFrameworkCore;
using SAV_Backend.Dto;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Services
{
    public class ArticleService : IArticleService
    {
        private readonly ApplicationDbContext _context;

        public ArticleService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Article>> GetArticles()
        {
            return await _context.Articles.Include(a => a.Reclamations)
                .ThenInclude(r => r.Interventions)
                .ThenInclude(i=>i.Pieces)
                .ToListAsync();

        }

        public async Task<Article?> GetArticleById(int id)
        {
            return await _context.Articles
                .Include(a => a.Reclamations)
                .ThenInclude(r => r.Interventions)
                .ThenInclude(i => i.Pieces) 
                .FirstOrDefaultAsync(a => a.Id == id);
        }

        public async Task<bool> CreateArticle(ArticleCreateModel model)
        {
            if (model == null)
            {
                return false;
            }

            try
            {
                var article = new Article
                {
                    Id = model.Id,
                    Description = model.Description,
                    Nom = model.Nom,
                    DateFabrication = model.DateFabrication,
                };
                await _context.Articles.AddAsync(article);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine($"Error creating article: {ex.Message}");
                return false;
            }
        }

        public async Task<bool> UpdateArticle(int id, Article updatedArticle)
        {
            try
            {
                var existingArticle = await _context.Articles.FindAsync(id);
                if (existingArticle == null)
                {
                    return false;
                }

                // Update fields
                existingArticle.Nom = updatedArticle.Nom;
                existingArticle.Description = updatedArticle.Description;
                existingArticle.DateFabrication = updatedArticle.DateFabrication;
                existingArticle.DateFinGarantie = updatedArticle.DateFinGarantie;

                _context.Articles.Update(existingArticle);
                await _context.SaveChangesAsync();

                return true;
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine($"Error updating article: {ex.Message}");
                return false;
            }
        }

        public async Task<bool> DeleteArticle(int id)
        {
            try
            {
                var article = await _context.Articles.FindAsync(id);
                if (article == null)
                {
                    return false;
                }

                _context.Articles.Remove(article);
                await _context.SaveChangesAsync();

                return true;
            }
            catch (Exception ex)
            {
                // Log the exception
                Console.WriteLine($"Error deleting article: {ex.Message}");
                return false;
            }
        }
    }
}
