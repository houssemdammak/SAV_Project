using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SAV_Backend.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SAV_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public AuthController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Check if user exists
            //var user = await _userManager.FindByEmailAsync(model.Email);

            var user = await _userManager.Users
               .Include(u => u.Client)
               .Include(u => u.ResponsableSAV)
               .FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user == null)
                return Unauthorized("Invalid email");

            // Sign in user
            var result = await _signInManager.PasswordSignInAsync(user.UserName, model.Password, false, lockoutOnFailure: false);


            if (result.Succeeded)
            {
                string userType;
                int userID=0;
                if (user.Client != null)
                {
                    userType = "Client";
                    userID = user.Client.Id;
                }
                else if (user.ResponsableSAV != null)
                {
                    userType = "ResponsableSAV";
                    userID = user.ResponsableSAV.Id;
                }
                else
                {
                    userType = "Unknown";
                }

                // Generate a JWT token
                var token = GenerateJwtToken(user, userType);
                return Ok(new { token, userType, userID });
            }

            if (result.IsLockedOut)
                return Unauthorized("Invalid password");

            return Unauthorized("Invalid password");
        }

        private string GenerateJwtToken(IdentityUser user, string userType)
        {
            var claims = new[]
            {
        new Claim(JwtRegisteredClaimNames.Sub, user.Email),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        new Claim(ClaimTypes.NameIdentifier, user.Id),
        new Claim(ClaimTypes.Email, user.Email),
        new Claim("UserType", userType) // Add user type as a custom claim
    };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("YourEvenMoreSuperSecretKey123456!"));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "yourdomain.com",
                audience: "yourdomain.com",
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpGet("protected-endpoint")]
        [Authorize]
        public IActionResult ProtectedEndpoint()
        {
            return Ok("This is a protected endpoint.");
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            // Additional logic for JWT invalidation if implemented
            return Ok(new { message = "Logged out successfully." });
        }

    }


}
