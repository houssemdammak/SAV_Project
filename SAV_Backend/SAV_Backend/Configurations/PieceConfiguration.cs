using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SAV_Backend.Models;

namespace SAV_Backend.Configurations
{
    public class PieceConfiguration : IEntityTypeConfiguration<Piece>
    {
        public void Configure(EntityTypeBuilder<Piece> builder)
        {

            builder.HasData(
            new Piece { Id = 1, Nom = "Joint de robinet", Description = "Joint en caoutchouc pour robinet standard", Prix = 2.5, Stock = 50 },
        new Piece { Id = 2, Nom = "Clapet anti-retour", Description = "Clapet en laiton pour systèmes de chauffage central", Prix = 15.0, Stock = 20 },
        new Piece { Id = 3, Nom = "Thermostat programmable", Description = "Thermostat pour chauffage central avec écran LCD", Prix = 65.0, Stock = 10 },
        new Piece { Id = 4, Nom = "Soupape de sécurité", Description = "Soupape de sécurité pour chauffe-eau", Prix = 12.0, Stock = 25 },
        new Piece { Id = 5, Nom = "Tuyau flexible inox", Description = "Tuyau flexible en inox pour raccordement sanitaire", Prix = 8.5, Stock = 30 },
        new Piece { Id = 6, Nom = "Radiateur en aluminium", Description = "Élément de radiateur en aluminium à haute efficacité", Prix = 45.0, Stock = 15 },
        new Piece { Id = 7, Nom = "Manomètre de pression", Description = "Manomètre pour surveiller la pression du système", Prix = 18.0, Stock = 12 },
        new Piece { Id = 8, Nom = "Cartouche de filtre à eau", Description = "Cartouche de filtration pour purificateur d'eau", Prix = 10.0, Stock = 40 },
        new Piece { Id = 9, Nom = "Vanne thermostatique", Description = "Vanne pour contrôle de température des radiateurs", Prix = 25.0, Stock = 18 },
        new Piece { Id = 10, Nom = "Circulateur de chauffage", Description = "Pompe pour système de chauffage central", Prix = 120.0, Stock = 5 }

            );
        }
    }

}
