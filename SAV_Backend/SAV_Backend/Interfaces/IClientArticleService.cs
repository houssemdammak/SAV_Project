using SAV_Backend.Dto;
using SAV_Backend.Models;

namespace SAV_Backend.Interfaces
{
    public interface IClientArticleService
    {
        Task<bool> CreateAsync(ClientArticle clientArticle);
        Task<ClientArticle> GetByIdsAsync(int clientId, int articleId);
        Task<IEnumerable<ClientArticle>> GetAllAsync();
        Task<bool> DeleteAsync(int clientId, int articleId);
        Task<ClientArticle> UpdateAsync(ClientArticle clientArticle);
    }
}
