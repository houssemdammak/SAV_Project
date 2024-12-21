using SAV_Backend.Dto;
using SAV_Backend.Models;

namespace SAV_Backend.Interfaces
{
    public interface IReclamationService
    {
        Task<IEnumerable<Reclamation>> GetReclamations();
        Task<Reclamation?> GetReclamationById(int id);
        Task<bool> CreateReclamation(ReclamationCreateModel model);
        Task<bool> DeleteReclamation(int id);
        Task<bool> UpdateReclamation(int id, Reclamation updatedReclamation);





    }
}
