using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Models;

namespace SAV_Backend.Configurations
{
    public class ArticleConfiguration : IEntityTypeConfiguration<Article>
    {
        public void Configure(EntityTypeBuilder<Article> builder)
        {
            builder.HasKey(a => a.Id);

            builder.HasMany(a => a.ClientArticles)
                   .WithOne(ca => ca.Article)
                   .HasForeignKey(ca => ca.ArticleId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasData(
                 new Article
                 {
                     Id = 1,
                     Nom = "Lavabo en céramique",
                     Description = "Lavabo en céramique blanche de haute qualité, idéal pour les salles de bain modernes.",
                     DateFabrication = new DateTime(2024, 1, 15)
                 },
                 new Article
                 {
                     Id = 2,
                     Nom = "Baignoire îlot",
                     Description = "Baignoire îlot élégante en acrylique, offrant un confort optimal pour la détente.",
                     DateFabrication = new DateTime(2024, 2, 20)
                 },
                 new Article
                 {
                     Id = 3,
                     Nom = "WC suspendu",
                     Description = "Toilette suspendue avec système de chasse d'eau économique, design contemporain.",
                     DateFabrication = new DateTime(2024, 3, 10)
                 },
                 new Article
                 {
                     Id = 4,
                     Nom = "Radiateur à eau chaude",
                     Description = "Radiateur performant pour chauffage central, assurant une diffusion homogène de la chaleur.",
                     DateFabrication = new DateTime(2024, 4, 5)
                 },
                 new Article
                 {
                     Id = 5,
                     Nom = "Chaudière à condensation",
                     Description = "Chaudière à condensation haute efficacité énergétique, compatible avec les systèmes de chauffage central.",
                     DateFabrication = new DateTime(2024, 5, 25)
                 },
                  new Article
                  {
                      Id = 6,
                      Nom = "Douche à l'italienne",
                      Description = "Douche spacieuse de style italien avec parois en verre trempé et receveur antidérapant.",
                      DateFabrication = new DateTime(2024, 6, 15)
                  },
                 new Article
                 {
                     Id = 7,
                     Nom = "Mitigeur thermostatique",
                     Description = "Robinet mitigeur thermostatique pour un contrôle précis de la température de l'eau.",
                     DateFabrication = new DateTime(2024, 7, 10)
                 },
                 new Article
                 {
                     Id = 8,
                     Nom = "Sèche-serviettes électrique",
                     Description = "Sèche-serviettes mural électrique, idéal pour chauffer la salle de bain et sécher les serviettes.",
                     DateFabrication = new DateTime(2024, 8, 5)
                 },
                 new Article
                 {
                     Id = 9,
                     Nom = "Pompe à chaleur air-eau",
                     Description = "Système de pompe à chaleur air-eau pour le chauffage central, offrant une haute efficacité énergétique.",
                     DateFabrication = new DateTime(2024, 9, 20)
                 },
                 new Article
                 {
                     Id = 10,
                     Nom = "Vanne thermostatique programmable",
                     Description = "Vanne thermostatique programmable pour radiateur, permettant de réguler la température pièce par pièce.",
                     DateFabrication = new DateTime(2024, 10, 30)
                 }
             );




        }
    }
}