using System.IO.Pipelines;
using System.Text.Json.Serialization;

namespace SAV_Backend.Models
{
    public class Intervention
    {
        public int Id { get; set; }
        public DateTime DateIntervention { get; set; }
        public double? MontantFacture { get; set; }
        public bool? EstGratuit { get; set; }
        public int? ReclamationId { get; set; }

        [JsonIgnore]
        public Reclamation? Reclamation { get; set; }
   
        public int ResponsableSAVId { get; set; }
        [JsonIgnore]
        public ResponsableSAV? ResponsableSAV { get; set; }

        public ICollection<Piece>? Pieces { get; set; }

    }



}
