using System.Text.Json.Serialization;

namespace SAV_Backend.Models
{
    public class ClientArticle
    {

        public int ClientId { get; set; }
        [JsonIgnore]
        public Client? Client { get; set; }

        public int ArticleId { get; set; }
        [JsonIgnore]
        public Article? Article { get; set; }
        public DateTime? DateFinGarantie { get; set; }

    }
}
