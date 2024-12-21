using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SAV_Backend.Models;

namespace SAV_Backend.Configurations
{
    public class NotificationConfiguration : IEntityTypeConfiguration<NotificationClient>
    {
        public void Configure(EntityTypeBuilder<NotificationClient> builder)
        {
            builder.HasOne(n => n.client)
                   .WithMany(c => c.Notifications)
                   .HasForeignKey(c => c.ReceiverId)
                   .OnDelete(DeleteBehavior.Cascade);



        }
    }

}
