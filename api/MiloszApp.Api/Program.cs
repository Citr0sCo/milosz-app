using MiloszApp.Api.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("Portfolio")
    ?? "Data Source=assets/milosz-app.db";

Directory.CreateDirectory(Path.Combine(builder.Environment.ContentRootPath, "assets"));
builder.Services.AddDbContext<DatabaseContext>(options =>
    options.UseSqlite(connectionString, sqlite => sqlite.MigrationsAssembly(typeof(DatabaseContext).Assembly.FullName)));
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHealthChecks();
builder.Services.AddCors(options => options.AddPolicy("Development", policy =>
    policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("Development");
}

app.UseDefaultFiles();
app.UseStaticFiles();
app.MapHealthChecks("/health");
app.MapControllers();
app.MapFallbackToFile("index.html");

app.Run();

public partial class Program;
