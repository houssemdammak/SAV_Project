using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Dto;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Services
{
    public class ReclamationService:IReclamationService
    {
        private readonly ApplicationDbContext _context;



        public ReclamationService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Reclamation>> GetReclamations()
        {
            return await _context.Reclamations.Include(r=>r.Interventions).ThenInclude(i=>i.Pieces)
                .Include(r => r.StatutReclamation)
                .ToListAsync();
        }
        public async Task<Reclamation?> GetReclamationById(int id)
        {
            return await _context.Reclamations.Include(r => r.Interventions).ThenInclude(i => i.Pieces)
                .Include(r => r.StatutReclamation)
                .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<bool> CreateReclamation(ReclamationCreateModel model)
        {
            if (model == null)
            {
                return false; // Handle null input gracefully
            }

            try
            {
                var reclamation = new Reclamation
                {
                    Id = model.Id,
                    DateReclamation= DateTime.Now,
                    Description=model.Description,
                    ClientId=model.ClientId,
                    ArticleId=model.ArticleId,
                    StatutReclamationId=1,
                };
                await _context.Reclamations.AddAsync(reclamation);

                await _context.SaveChangesAsync();

                return true; 
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error creating reclamation: {ex.Message}");
                return false; 
            }
        }
        public async Task<bool> DeleteReclamation(int id)
        {
            try
            {
                var reclamation = await _context.Reclamations.FindAsync(id);
                if (reclamation == null)
                {
                    return false; // Reclamation not found
                }

                _context.Reclamations.Remove(reclamation);
                await _context.SaveChangesAsync();

                return true; // Successfully deleted
            }
            catch (Exception ex)
            {
                // Log the exception (replace with actual logging)
                Console.WriteLine($"Error deleting reclamation: {ex.Message}");
                return false; // Indicate failure
            }
        }

        public async Task<bool> UpdateReclamation(int id, Reclamation updatedReclamation)
        {
            try
            {
                var existingReclamation = await _context.Reclamations.FindAsync(id);
                if (existingReclamation == null)
                {
                    return false; // Reclamation not found
                }

                // Update the properties
                existingReclamation.DateReclamation = updatedReclamation.DateReclamation;
                existingReclamation.Description = updatedReclamation.Description;
                existingReclamation.ClientId = updatedReclamation.ClientId;
                existingReclamation.ArticleId = updatedReclamation.ArticleId;
                existingReclamation.StatutReclamationId = updatedReclamation.StatutReclamationId;

                _context.Reclamations.Update(existingReclamation);
                await _context.SaveChangesAsync();

                return true; // Successfully updated
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error updating reclamation: {ex.Message}");
                return false; // Indicate failure
            }
        }



    }
}
