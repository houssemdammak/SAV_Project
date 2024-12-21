using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SAV_Backend.Interfaces;

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
    }
}
