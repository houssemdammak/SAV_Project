using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Dto;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Services
{
    public class ResponsableService:IResponsableService
    {

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public ResponsableService(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<IEnumerable<ResponsableSAV>> GetResponsables()
        {
            return await _context.ResponsablesSAV.Include(c => c.ApplicationUser)
                .Include(c=>c.Interventions)
                .ToListAsync();
        }

        public async Task<ResponsableSAV?> GetResponsableById(int id)
        {
            return await _context.ResponsablesSAV.Include(c => c.ApplicationUser)
                                         .FirstOrDefaultAsync(c => c.Id == id);
        }

        public async Task<bool> CreateResponsable(ResponsableCreateModel model)
        {
            var applicationUser = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                PhoneNumber=model.Telephone
            };

            var result = await _userManager.CreateAsync(applicationUser, model.Password);
            if (!result.Succeeded)
                return false;

            var respo = new ResponsableSAV
            {
                Nom = model.Nom,
                Prenom = model.Prenom,
                Email = model.Email,
                Telephone = model.Telephone,
                ApplicationUserId = applicationUser.Id
            };

            _context.ResponsablesSAV.Add(respo);
            await _context.SaveChangesAsync();

            return true; // Return true if successful
        }


        public async Task<bool> UpdateResponsable(int id, ResponsableSAV updatedResponsable)
        {
            // Fetch the existing ResponsableSAV, including the related ApplicationUser
            var existingResponsable = await _context.ResponsablesSAV
                                                    .Include(r => r.ApplicationUser)
                                                    .FirstOrDefaultAsync(r => r.Id == id);

            if (existingResponsable == null)
                return false; // Responsable not found

            // Update ResponsableSAV properties
            existingResponsable.Nom = updatedResponsable.Nom;
            existingResponsable.Prenom = updatedResponsable.Prenom;
            existingResponsable.Email = updatedResponsable.Email;
            existingResponsable.Telephone = updatedResponsable.Telephone;

            // Update the related ApplicationUser properties
            if (existingResponsable.ApplicationUser != null)
            {
                existingResponsable.ApplicationUser.Email = updatedResponsable.Email;
                existingResponsable.ApplicationUser.PhoneNumber = updatedResponsable.Telephone;
                existingResponsable.ApplicationUser.NormalizedEmail = updatedResponsable.Email.ToUpper();
                existingResponsable.ApplicationUser.NormalizedUserName = updatedResponsable.Email.ToUpper();
                existingResponsable.ApplicationUser.UserName = updatedResponsable.Email;
                existingResponsable.ApplicationUser.PhoneNumber = updatedResponsable.Telephone;


                // Add additional fields to update as needed
            }

            // Save changes
            _context.ResponsablesSAV.Update(existingResponsable); // Attach updated ResponsableSAV
            await _context.SaveChangesAsync(); // EF Core tracks changes and updates both entities

            return true;
        }

        public async Task<bool> DeleteResponsable(int id)
        {
            // Fetch the ResponsableSAV along with its ApplicationUser
            var responsable = await _context.ResponsablesSAV
                                             .Include(r => r.ApplicationUser)
                                             .FirstOrDefaultAsync(r => r.Id == id);

            if (responsable == null)
                return false; // Entity doesn't exist

            // Delete the ApplicationUser
            var result = await _userManager.DeleteAsync(responsable.ApplicationUser);

            if (!result.Succeeded)
            {
                // Handle errors from UserManager
                return false;
            }

            // Save changes (EF Core will handle cascading delete)
            await _context.SaveChangesAsync();

            return true;
        }


     }
}
