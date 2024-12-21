using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;

namespace SAV_Backend.Models
{
    public class ApplicationUser : IdentityUser
    {
        [JsonIgnore]
        public Client? Client { get; set; }
        
        [JsonIgnore]
        public ResponsableSAV? ResponsableSAV { get; set; }
    }

}
