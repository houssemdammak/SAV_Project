using System.Text.Json.Serialization;

namespace SAV_Backend.Models
{
    public class Reclamation
    {
        public int Id { get; set; }
        public DateTime DateReclamation { get; set; }
        public string Description { get; set; }
        public int ClientId { get; set; }
        [JsonIgnore]
        public Client?Client { get; set; }
        public int? ArticleId { get; set; }

        [JsonIgnore]
        public Article? Article { get; set; }
                                        
        public int StatutReclamationId { get; set; }
        public StatutReclamation? StatutReclamation { get; set; } 
        public ICollection<Intervention>? Interventions { get; set; }
    }



}
