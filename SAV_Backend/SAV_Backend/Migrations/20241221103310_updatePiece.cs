using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SAV_Backend.Migrations
{
    /// <inheritdoc />
    public partial class updatePiece : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "Prix",
                table: "Pieces",
                type: "float",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.InsertData(
                table: "Pieces",
                columns: new[] { "Id", "Description", "Nom", "Prix", "Stock" },
                values: new object[,]
                {
                    { 1, "Joint en caoutchouc pour robinet standard", "Joint de robinet", 2.5, 50 },
                    { 2, "Clapet en laiton pour systèmes de chauffage central", "Clapet anti-retour", 15.0, 20 },
                    { 3, "Thermostat pour chauffage central avec écran LCD", "Thermostat programmable", 65.0, 10 },
                    { 4, "Soupape de sécurité pour chauffe-eau", "Soupape de sécurité", 12.0, 25 },
                    { 5, "Tuyau flexible en inox pour raccordement sanitaire", "Tuyau flexible inox", 8.5, 30 },
                    { 6, "Élément de radiateur en aluminium à haute efficacité", "Radiateur en aluminium", 45.0, 15 },
                    { 7, "Manomètre pour surveiller la pression du système", "Manomètre de pression", 18.0, 12 },
                    { 8, "Cartouche de filtration pour purificateur d'eau", "Cartouche de filtre à eau", 10.0, 40 },
                    { 9, "Vanne pour contrôle de température des radiateurs", "Vanne thermostatique", 25.0, 18 },
                    { 10, "Pompe pour système de chauffage central", "Circulateur de chauffage", 120.0, 5 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Pieces",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Pieces",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Pieces",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Pieces",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Pieces",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Pieces",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Pieces",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Pieces",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Pieces",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Pieces",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.AlterColumn<float>(
                name: "Prix",
                table: "Pieces",
                type: "real",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");
        }
    }
}
