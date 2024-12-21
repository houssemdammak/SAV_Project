using SAV_Backend.Dto;
using SAV_Backend.Models;

namespace SAV_Backend.Interfaces
{
    public interface IInterventionService
    {
        Task<IEnumerable<Intervention>> GetAllInterventionsAsync();
        Task<Intervention> GetInterventionByIdAsync(int id);
        Task<Intervention> CreateInterventionAsync(InterventionCreateModel model);
        Task<bool> DeleteInterventionAsync(int id);
    }

}