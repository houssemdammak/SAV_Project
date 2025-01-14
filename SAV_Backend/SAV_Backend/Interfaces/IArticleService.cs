using SAV_Backend.Dto;
using SAV_Backend.Models;

namespace SAV_Backend.Interfaces
{
    public interface IArticleService
    {
        Task<IEnumerable<Article>> GetArticles();
        Task<Article?> GetArticleById(int id);
        Task<Article> CreateArticle(ArticleCreateModel model);
        Task<bool> UpdateArticle(int id, Article updatedArticle);
        Task<bool> DeleteArticle(int id);
    }
}
