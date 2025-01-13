using SAV_Backend.Models;

namespace SAV_Backend.Interfaces
{
    public interface IPieceService
    {
        Task<IEnumerable<Piece>> GetPieces();
        Task<Piece> GetPieceById(int id);
    }
}
