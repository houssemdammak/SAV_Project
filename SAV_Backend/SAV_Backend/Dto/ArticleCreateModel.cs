namespace SAV_Backend.Dto
{
    public class ArticleCreateModel
    {
        public int Id { get; set; }
        public string Nom { get; set; }
        public string Description { get; set; }
        public DateTime DateFabrication { get; set; }
       // public DateTime? DateFinGarantie { get; set; }
    }
}
