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





        }
    }
}
