using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Validations;
using SAV_Backend.Dto;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Services
{
    public class InterventionService : IInterventionService
    {
        private readonly ApplicationDbContext _context;

        public InterventionService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Intervention>> GetAllInterventionsAsync()
        {
            return await _context.Interventions
                .Include(i => i.Reclamation)
                .ThenInclude(r => r.Article)
                .Include(i => i.ResponsableSAV)
                .Include(i => i.Pieces)
                .ToListAsync();
        }

        public async Task<Intervention> GetInterventionByIdAsync(int id)
        {
            var intervention = await _context.Interventions
                .Include(i => i.Reclamation)
                .ThenInclude(r => r.Article)
                .Include(i => i.ResponsableSAV)
                .Include(i => i.Pieces)
                .FirstOrDefaultAsync(i => i.Id == id);

            if (intervention == null)
            {
                throw new KeyNotFoundException("Intervention not found");
            }

            return intervention;
        }

        public async Task<Intervention> CreateInterventionAsync(InterventionCreateModel model)
        {
            var reclamation = await _context.Reclamations
                .Include(r => r.Article)
                .FirstOrDefaultAsync(r => r.Id == model.ReclamationId);

            if (reclamation == null || reclamation.Article == null)
            {
                throw new KeyNotFoundException("Reclamation not found");
            }

            var article = reclamation.Article;
            var clientArticle = await _context.ClientArticles.FirstOrDefaultAsync(c=>c.ArticleId == article.Id && c.ClientId==reclamation.ClientId);
            double totalPiecesCost = 0;
            if (clientArticle.DateFinGarantie.HasValue && (clientArticle.DateFinGarantie.Value - DateTime.Now).TotalDays >= 0)
            {
                model.EstGratuit = true;
                model.MontantFacture = 0;
            }
            else
            {
                model.EstGratuit = false;
                

                if (model.PieceIds != null )
                {
                    var dbPieces = await _context.Pieces
                        .Where(p => model.PieceIds.Contains(p.Id))
                        .ToListAsync();

                    foreach (var dbPiece in dbPieces)
                    {
                        if (dbPiece.Stock < 1)
                        {
                            throw new InvalidOperationException($"Piece {dbPiece.Nom} is out of stock");
                        }

                        // Reduce stock and calculate cost
                        dbPiece.Stock -= 1;
                        totalPiecesCost += dbPiece.Prix;
                    }

                    // Add total pieces cost to the invoice amount
                    model.MontantFacture += totalPiecesCost;
                }
            }
            reclamation.StatutReclamationId = 2;

            var intervention = new Intervention
            {
                Id = model.Id,
                DateIntervention = DateTime.Now,
                MontantFacture = totalPiecesCost,
                EstGratuit = model.EstGratuit,
                ReclamationId = model.ReclamationId,
                ResponsableSAVId = model.ResponsableSAVId,
                Pieces = model.PieceIds != null ? await _context.Pieces.Where(p => model.PieceIds.Contains(p.Id)).ToListAsync() : null
            };
            // Add and save the intervention
            _context.Interventions.Add(intervention);
            await _context.SaveChangesAsync();
            // Create a notification for the client
            var notification = new NotificationClient
            {
                SenderId = model.ResponsableSAVId,
                SenderName = await _context.ResponsablesSAV
                    .Where(r => r.Id == model.ResponsableSAVId)
                    .Select(r => r.Nom)
                    .FirstOrDefaultAsync() ?? "Unknown", // Replace with actual logic to fetch the sender's name
                ReceiverId = reclamation.ClientId, // Assuming reclamation has a ClientId field
                Message = "Your article intervention is created",
                CreatedAt = DateTime.Now
            };

            // Add and save the notification
            _context.NotificationClients.Add(notification);
            await _context.SaveChangesAsync();

            return intervention;
        }
    

        public async Task<bool> DeleteInterventionAsync(int id)
        {
            var intervention = await _context.Interventions.FindAsync(id);
            if (intervention == null)
            {
                return false;
            }

            _context.Interventions.Remove(intervention);
            await _context.SaveChangesAsync();
            return true;
        }

    }

}
