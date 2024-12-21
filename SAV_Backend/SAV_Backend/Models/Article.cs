namespace SAV_Backend.Models
{public class Article
{
    public int Id { get; set; }
    public string Nom { get; set; }
    public string Description { get; set; }
    public DateTime DateFabrication { get; set; }
    public DateTime? DateFinGarantie { get; set; }
    public ICollection<Reclamation>? Reclamations { get; set; }


    }


}
