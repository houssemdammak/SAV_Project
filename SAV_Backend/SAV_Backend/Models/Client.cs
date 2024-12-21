namespace SAV_Backend.Models
{
    public class Client
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Adresse { get; set; }
        public string Email { get; set; }
        public string Telephone { get; set; }
        public DateTime DateCreation { get; set; }

        public string? ApplicationUserId { get; set; } 
        public ApplicationUser? ApplicationUser { get; set; }  

        public ICollection<Reclamation>? Reclamations { get; set; }
        public virtual ICollection<NotificationClient>? Notifications { get; set; }



    }


}
