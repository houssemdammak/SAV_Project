using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SAV_Backend.Models;

namespace SAV_Backend.Configurations
{
    public class StatutReclamationConfiguration : IEntityTypeConfiguration<StatutReclamation>
    {
        public void Configure(EntityTypeBuilder<StatutReclamation> builder)
        {

            builder.HasData(
                new StatutReclamation { Id = 1, Name = "En attente" },
                new StatutReclamation { Id = 2, Name = "En cours" },
                new StatutReclamation { Id = 3, Name = "Terminée" },
                new StatutReclamation { Id = 4, Name = "Refusée" }
            );
        }

    }
}
