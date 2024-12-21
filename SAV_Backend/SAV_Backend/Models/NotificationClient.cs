using System.Text.Json.Serialization;

namespace SAV_Backend.Models
{
    public class NotificationClient
    {
        public int NotificationClientId { get; set; }
        public int SenderId { get; set; }
        public string SenderName { get; set; }
        public int ReceiverId { get; set; }

        public string Message { get; set; }
        public bool IsRead { get; set; } = false;
        public bool IsVisited { get; set; } = false;

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        [JsonIgnore]
        public virtual Client? client { get; set; }

    }
}
