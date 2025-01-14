using Microsoft.EntityFrameworkCore;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Services
{
    public class NotificationClientService : INotificationClientService
    {

        private readonly ApplicationDbContext _context;



        public NotificationClientService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<NotificationClient>> GetNotifications()
        {
            return await _context.NotificationClients.Include(n=>n.client)
                
                .ToListAsync();
        }
        public async Task<NotificationClient?> GetNotification(int id)
        {
            return await _context.NotificationClients
                .FirstOrDefaultAsync(c => c.NotificationClientId == id);
        }

        public async Task<IEnumerable<NotificationClient>> GetNotificationByClientId(int clientId)
        {
            return await _context.NotificationClients.Include(n => n.client).Where(n=>n.ReceiverId==clientId).ToListAsync();
        }
        public async Task<bool> MarkAsRead(int notificationId)
        {
            var notification = await _context.NotificationClients
                .FirstOrDefaultAsync(n => n.NotificationClientId == notificationId);

            if (notification == null)
            {
                return false;
            }
            notification.IsRead = true;
            await _context.SaveChangesAsync();

            return true;
        }
        public async Task MarkNotificationsAsReadAsync(List<int> notificationIds)
        {
            var notifications = await _context.NotificationClients
                .Where(n => notificationIds.Contains(n.NotificationClientId))
                .ToListAsync();

            foreach (var notification in notifications)
            {
                notification.IsRead = true;
            }

            await _context.SaveChangesAsync();
        }
    }
}
