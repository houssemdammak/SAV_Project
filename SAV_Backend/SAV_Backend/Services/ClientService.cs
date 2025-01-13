using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Dto;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Services
{
    public class ClientService : IClientService
    {
        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public ClientService(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<IEnumerable<Client>> GetClients()
        {
            return await _context.Clients.Include(c => c.ApplicationUser)
                .Include(c=>c.Reclamations).ThenInclude(r=>r.Interventions).ThenInclude(i=>i.Pieces)
                .ToListAsync();
        }

        public async Task<Client?> GetClientById(int id)
        {
            return await _context.Clients.Include(c => c.ApplicationUser)
                        .Include(c => c.Reclamations).ThenInclude(r => r.Interventions).ThenInclude(i => i.Pieces)
                        .FirstOrDefaultAsync(c => c.Id == id);
        }


        public async Task<IEnumerable<Article>> GetArticles(int clientId)
        {
            // Retrieve the article IDs associated with the specified client
            var articleIds = await _context.ClientArticles
                .Where(ca => ca.ClientId == clientId)
                .Select(ca => ca.ArticleId)
                .ToListAsync();

            // Retrieve the articles with the specified IDs
            var articles = await _context.Articles
                .Where(a => articleIds.Contains(a.Id))
                .ToListAsync();

            return articles;
        }

        public async Task<String> CreateClient(ClientCreateModel model)
        {
            var applicationUser = new ApplicationUser
            {
                UserName = model.Email,
                Email = model.Email,
                PhoneNumber=model.Telephone
            };

            var result = await _userManager.CreateAsync(applicationUser, model.Password);
            if (!result.Succeeded)
                return string.Join(", ", result.Errors.Select(e => e.Description));
                //return false;

            var client = new Client
            {
                Nom = model.Nom,
                Prenom = model.Prenom,
                Adresse = model.Adresse,
                Email = model.Email,
                Telephone = model.Telephone,
                DateCreation = DateTime.UtcNow,
                ApplicationUserId = applicationUser.Id
            };

            _context.Clients.Add(client);
            await _context.SaveChangesAsync();

            return "Success";
        }

       
        public async Task<bool> UpdateClient(int id, Client updatedClient)
        {

            /* Exemple de json pour put request
                 {
                  "id": 1,
                  "nom": "Dammak",
                  "prenom": "Houssem",
                  "adresse": "Saltnia KM2",
                  "email": "houssem@gmail.com",
                  "telephone": "94338146",
                  "dateCreation": "2024-12-13T11:29:21.986Z"
                }
             */


            var existingClient = await _context.Clients
                                                    .Include(r => r.ApplicationUser)
                                                    .FirstOrDefaultAsync(r => r.Id == id);

            if (existingClient == null)
                return false; 

            // Update Client properties
            existingClient.Nom = updatedClient.Nom;
            existingClient.Prenom = updatedClient.Prenom;
            existingClient.Email = updatedClient.Email;
            existingClient.Telephone = updatedClient.Telephone;
            existingClient.DateCreation = DateTime.UtcNow;
            existingClient.Adresse = updatedClient.Adresse;


            if (existingClient.ApplicationUser != null)
            {
                existingClient.ApplicationUser.Email = updatedClient.Email;
                existingClient.ApplicationUser.PhoneNumber = updatedClient.Telephone;
                existingClient.ApplicationUser.UserName = updatedClient.Email;

                existingClient.ApplicationUser.NormalizedEmail = updatedClient.Email.ToUpper();
                existingClient.ApplicationUser.NormalizedUserName = updatedClient.Email.ToUpper();
                existingClient.ApplicationUser.PhoneNumber=updatedClient.Telephone;


            }

            // Save changes
            _context.Clients.Update(existingClient);
            await _context.SaveChangesAsync(); 
            return true;
        }

        public async Task<bool> DeleteClient(int id)
        {
            // Fetch the Client along with its ApplicationUser
            var client = await _context.Clients
                                             .Include(r => r.ApplicationUser)
                                             .FirstOrDefaultAsync(r => r.Id == id);

            if (client == null)
                return false; // Entity doesn't exist

            // Delete the ApplicationUser
            var result = await _userManager.DeleteAsync(client.ApplicationUser);

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
