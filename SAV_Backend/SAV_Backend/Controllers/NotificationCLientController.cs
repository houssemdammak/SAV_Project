using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Interfaces;
using SAV_Backend.Services;

namespace SAV_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationCLientController : ControllerBase
    {
        private readonly INotificationClientService _NotifService;

        public NotificationCLientController(INotificationClientService NotifService)
        {
            _NotifService = NotifService;
        }

        // GET: api/Article
        [HttpGet]
        public async Task<IActionResult> GetNotifications()
        {
            var notifs = await _NotifService.GetNotifications();
            return Ok(notifs);
        }

        // GET: api/Article/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetNotificationById(int id)
        {
            var notif = await _NotifService.GetNotification(id);
            if (notif == null)
            {
                return NotFound(new { message = "Notif not found." });
            }

            return Ok(notif);
        }
        [HttpGet("clientNotifications/{clientId}")]
        public async Task<IActionResult> GetNotificationByClientId(int clientId)
        {
            var notifs = await _NotifService.GetNotificationByClientId(clientId);
            if (notifs == null)
            {
                return NotFound(new { message = "Notifs not found." });
            }

            return Ok(notifs);
        }




        [HttpPost("markOneNotificationAsRead/{id}")]
        public async Task<IActionResult> MarkAsRead(int id)
        {
            var result = await _NotifService.MarkAsRead(id);
            if (result)
            {
                return Ok(new { message = "Notification marked as read." });
            }
            return NotFound(new { message = "Notification not found." });
        }

        [HttpPost("markManyNotificationAsRead")]
        public async Task<IActionResult> MarkAsRead([FromBody] List<int> notificationIds)
        {
            if (notificationIds == null || !notificationIds.Any())
            {
                return BadRequest("No notification IDs provided.");
            }

            await _NotifService.MarkNotificationsAsReadAsync(notificationIds);
            return Ok("Notifications marked as read.");
        }


    }
}
