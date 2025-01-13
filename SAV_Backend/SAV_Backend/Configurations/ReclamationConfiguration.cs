using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Models;

namespace SAV_Backend.Configurations
{
    public class ReclamationConfiguration : IEntityTypeConfiguration<Reclamation>
    {
        public void Configure(EntityTypeBuilder<Reclamation> builder)
        {
            builder.HasKey(r => r.Id);
            builder.HasOne(r => r.Client)
                   .WithMany(c => c.Reclamations)
                   .HasForeignKey(r => r.ClientId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(r => r.StatutReclamation)
                  .WithMany()
                  .HasForeignKey(r => r.StatutReclamationId)
                  .OnDelete(DeleteBehavior.Restrict);
           
            builder.HasOne(r => r.Article)
              .WithMany(a => a.Reclamations)
              .HasForeignKey(r => r.ArticleId)
              .OnDelete(DeleteBehavior.Cascade);
            


        }
    }

}
