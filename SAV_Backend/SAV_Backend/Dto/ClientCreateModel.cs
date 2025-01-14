namespace SAV_Backend.Dto
{
    public class ClientCreateModel
    {
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Adresse { get; set; }
        public string Email { get; set; }
        public string Telephone { get; set; }
        public DateTime? DateCreation { get; set; }
        public string Password { get; set; }  
    }

}
