using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Models;

namespace SAV_Backend.Configurations
{
    public class ResponsableSAVConfiguration : IEntityTypeConfiguration<ResponsableSAV>
    {
        public void Configure(EntityTypeBuilder<ResponsableSAV> builder)
        {
            builder.HasKey(r => r.Id);
            builder.HasOne(r => r.ApplicationUser)
                   .WithOne(u => u.ResponsableSAV)
                   .HasForeignKey<ResponsableSAV>(r => r.ApplicationUserId)
                   .OnDelete(DeleteBehavior.Cascade);
            
        }
    }

}
