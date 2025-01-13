using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Services
{
    public class ClientArticleService : IClientArticleService
    {
        private readonly ApplicationDbContext _context;

        public ClientArticleService(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<bool> CreateAsync(ClientArticle clientArticle)
        {
            if (clientArticle == null)
            {
                throw new ArgumentNullException(nameof(clientArticle));
            }

            // Ensure the client and article exist in the database
            var client = await _context.Clients.FindAsync(clientArticle.ClientId);
            if (client == null)
            {
                throw new ArgumentException("Client not found", nameof(clientArticle.ClientId));
            }

            var article = await _context.Articles.FindAsync(clientArticle.ArticleId);
            if (article == null)
            {
                throw new ArgumentException("Article not found", nameof(clientArticle.ArticleId));
            }

            // Only set the ClientId and ArticleId (no need to set Client and Article objects directly)
            _context.ClientArticles.Add(clientArticle);
            await _context.SaveChangesAsync();
            return true;
        }


        public async Task<ClientArticle> GetByIdsAsync(int clientId, int articleId)
        {
            return await _context.ClientArticles
                .Include(ca => ca.Client)
                .Include(ca => ca.Article)
                .FirstOrDefaultAsync(ca => ca.ClientId == clientId && ca.ArticleId == articleId);
        }

        public async Task<IEnumerable<ClientArticle>> GetAllAsync()
        {
            return await _context.ClientArticles
                .Include(ca => ca.Client)
                .Include(ca => ca.Article)
                .ToListAsync();
        }

        public async Task<bool> DeleteAsync(int clientId, int articleId)
        {
            var clientArticle = await GetByIdsAsync(clientId, articleId);
            if (clientArticle == null)
            {
                return false;
            }

            _context.ClientArticles.Remove(clientArticle);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<ClientArticle> UpdateAsync(ClientArticle clientArticle)
        {
            if (clientArticle == null)
            {
                return null;
            }

            _context.ClientArticles.Update(clientArticle);
            await _context.SaveChangesAsync();
            return clientArticle;
        }

    }
}
