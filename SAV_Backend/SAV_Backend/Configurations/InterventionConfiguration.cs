using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Models;

namespace SAV_Backend.Configurations
{
    public class InterventionConfiguration : IEntityTypeConfiguration<Intervention>
    {
        public void Configure(EntityTypeBuilder<Intervention> builder)
        {
            builder.HasKey(i => i.Id);

            builder.HasOne(i => i.ResponsableSAV)
                   .WithMany(r => r.Interventions)
                   .HasForeignKey(i => i.ResponsableSAVId)
                   .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(i => i.Reclamation)
                   .WithMany(r => r.Interventions)
                   .HasForeignKey(i => i.ReclamationId)
                   .OnDelete(DeleteBehavior.Cascade);

            builder.HasMany(i => i.Pieces)
                   .WithMany();




        }
    }

}
