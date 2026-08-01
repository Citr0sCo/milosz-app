using Microsoft.EntityFrameworkCore;

namespace MiloszApp.Api.Data;

public sealed class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options)
{
}
