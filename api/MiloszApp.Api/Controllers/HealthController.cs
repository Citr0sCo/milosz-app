using Microsoft.AspNetCore.Mvc;

namespace MiloszApp.Api.Controllers;

[ApiController]
[Route("api/health")]
public sealed class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get() => Ok(new
    {
        status = "ok",
        service = "milosz-app",
        timestamp = DateTimeOffset.UtcNow
    });
}
