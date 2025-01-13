using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Models;

namespace SAV_Backend
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<ResponsableSAV> ResponsablesSAV { get; set; }
        public DbSet<Reclamation> Reclamations { get; set; }
        public DbSet<Intervention> Interventions { get; set; }
        public DbSet<Article> Articles { get; set; }
        public DbSet<Piece> Pieces { get; set; }
        public DbSet<StatutReclamation> StatutReclamations { get; set; }
        public DbSet<NotificationClient> NotificationClients { get; set; }
        public DbSet<ClientArticle> ClientArticles { get; set; } 


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ClientArticle>()
               .HasKey(ca => new { ca.ClientId, ca.ArticleId });
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        }

    }
}
