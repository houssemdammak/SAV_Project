﻿using SAV_Backend.Dto;
using SAV_Backend.Models;

namespace SAV_Backend.Interfaces
{
    public interface IClientService
    {
        Task<IEnumerable<Client>> GetClients();
        Task<Client?> GetClientById(int id);
        Task<String> CreateClient(ClientCreateModel model);
        Task<bool> UpdateClient(int id, Client client);
        Task<bool> DeleteClient(int id);
        Task<IEnumerable<Article>> GetArticles(int clientId);
    }
}
