using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SAV_Backend.Models;

namespace SAV_Backend.Configurations
{
    public class ClientConfiguration : IEntityTypeConfiguration<Client>
    {
        public void Configure(EntityTypeBuilder<Client> builder)
        {
            builder.HasKey(c => c.Id);
            builder.HasOne(c => c.ApplicationUser)
                   .WithOne(u => u.Client)
                   .HasForeignKey<Client>(c => c.ApplicationUserId)
                   .OnDelete(DeleteBehavior.Cascade);

        

        }
    }

}
