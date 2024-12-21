using SAV_Backend.Models;

namespace SAV_Backend.Interfaces
{
    public interface INotificationClientService
    {
        Task<IEnumerable<NotificationClient>> GetNotifications();
        Task<NotificationClient?> GetNotification(int id);
    }
}
