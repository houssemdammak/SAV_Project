using SAV_Backend.Models;

namespace SAV_Backend.Dto
{
    public class InterventionCreateModel
    {
        public int Id { get; set; }
        public DateTime DateIntervention { get; set; }
        public double? MontantFacture { get; set; }
        public bool? EstGratuit { get; set; }
        public int ReclamationId { get; set; }

        public int ResponsableSAVId { get; set; }
        public ICollection<int>? PieceIds { get; set; }


        /*        public ICollection<Piece>? Pieces { get; set; }
        */
    }
}
