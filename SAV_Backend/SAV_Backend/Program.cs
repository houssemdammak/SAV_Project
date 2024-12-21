
using DotNetEnv;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SAV_Backend.Interfaces;
using SAV_Backend.Models;
using SAV_Backend.Services;
using System.Text.Json.Serialization;

namespace SAV_Backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            Env.Load();
            var serverName = Environment.GetEnvironmentVariable("SERVER_NAME");
            var connectionString = builder.Configuration.GetConnectionString("SAVDatabase")
                .Replace("{SERVER_NAME}", serverName);
            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));

            builder.Services.AddScoped<IClientService, ClientService>();
            builder.Services.AddScoped<IResponsableService, ResponsableService>();
            builder.Services.AddScoped<IReclamationService, ReclamationService>();
            builder.Services.AddScoped<IArticleService, ArticleService>();
            builder.Services.AddScoped<IInterventionService, InterventionService>();
            builder.Services.AddScoped<INotificationClientService, NotificationClientService>();

            /* builder.Services.AddControllers()
                     .AddJsonOptions(options =>
                     {
                         // Enable handling of circular references globally
                         options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.Preserve;
                     });*/

            // Configure Identity
            builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();



            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
