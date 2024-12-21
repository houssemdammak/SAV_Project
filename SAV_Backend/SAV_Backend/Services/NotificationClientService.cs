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
    }
}
