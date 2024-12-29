using SAV_Backend.Models;

namespace SAV_Backend.Dto
{
    public class ReclamationCreateModel
    {
        public int Id { get; set; }
        public DateTime DateReclamation { get; set; }
        public string Description { get; set; }
     
        public int ClientId { get; set; }
        public int ArticleId { get; set; }

/*        public int StatutReclamationId { get; set; }
*/
    }
}
