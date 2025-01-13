using Microsoft.EntityFrameworkCore;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;

namespace SAV_Backend.Services
{
    public class PiecesService:IPieceService
    {
        private readonly ApplicationDbContext _context;



        public PiecesService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Piece>> GetPieces()
        {
            return await _context.Pieces
                .ToListAsync();
        }
        public async Task<Piece> GetPieceById(int id)
        {
            return await _context.Pieces
                .FirstOrDefaultAsync(c => c.Id == id);
        }

    }
}
