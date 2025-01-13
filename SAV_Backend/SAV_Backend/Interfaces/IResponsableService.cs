using SAV_Backend.Dto;
using SAV_Backend.Models;

namespace SAV_Backend.Interfaces
{
    public interface IResponsableService
    {
        Task<IEnumerable<ResponsableSAV>> GetResponsables();
        Task<ResponsableSAV?> GetResponsableById(int id);
        Task<String> CreateResponsable(ResponsableCreateModel model);
        Task<bool> UpdateResponsable(int id, ResponsableSAV Responsable);
        Task<bool> DeleteResponsable(int id);
    }
}
