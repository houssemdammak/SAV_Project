using System.IO.Pipelines;

namespace SAV_Backend.Models
{
    public class ResponsableSAV
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Email { get; set; }
        public string Telephone { get; set; }
        public string? ApplicationUserId { get; set; } 
        public ApplicationUser? ApplicationUser { get; set; }
        public ICollection<Intervention>? Interventions { get; set; }
        

    }



}
