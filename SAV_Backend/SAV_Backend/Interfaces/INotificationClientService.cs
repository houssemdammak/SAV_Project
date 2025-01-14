using SAV_Backend.Models;

namespace SAV_Backend.Interfaces
{
    public interface INotificationClientService
    {
        Task<IEnumerable<NotificationClient>> GetNotifications();
        Task<NotificationClient?> GetNotification(int id);
        Task<IEnumerable<NotificationClient>> GetNotificationByClientId(int clientId);
        Task<bool> MarkAsRead(int notificationId);
        Task MarkNotificationsAsReadAsync(List<int> notificationIds);
    }
}
