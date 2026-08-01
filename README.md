# milosz-app

A dark, modern portfolio for Milosz Dura — software engineer and web developer.

The project reimagines [miloszdura.com](https://miloszdura.com/) with the useful original biography, education, skills, project links, and contact channels retained in a focused single-page experience.

## Stack

- Angular 22 standalone frontend with strict TypeScript and SCSS
- ASP.NET Core / .NET 10 backend
- Entity Framework Core 10 with SQLite configured for future migrations
- Multi-stage Docker image serving Angular from the ASP.NET Core host
- Docker Compose example compatible with Docker Swarm deployment settings

## Local development

Requirements: Node.js 22+, npm 10+, and the .NET 10 SDK for API development.

```bash
npm install
npm start
```

The frontend is available at `http://localhost:4200`.

Run the backend from its project directory:

```bash
cd api/MiloszApp.Api
dotnet run
```

The API exposes `GET /api/health`; Swagger is available in Development at `/swagger`.

## Verification

```bash
npm run build
npm test -- --watch=false
cd api
dotnet restore
dotnet build MiloszApp.sln
```

The Angular production build is written to `dist/milosz-app/browser`.

## Entity Framework migrations

The initial portfolio does not require persisted content, so no artificial schema migration is included. The context, SQLite provider, and tracked `Migrations` directory are ready when persisted content is introduced:

```bash
dotnet tool install --global dotnet-ef
dotnet ef migrations add InitialCreate \
  --project api/MiloszApp.Api \
  --startup-project api/MiloszApp.Api \
  --output-dir Migrations

dotnet ef database update \
  --project api/MiloszApp.Api \
  --startup-project api/MiloszApp.Api
```

Use `ConnectionStrings__Portfolio` to select another database path. Production schema changes should be reviewed and applied deliberately rather than being run automatically at startup.

## Docker

Build and run the combined application locally:

```bash
docker compose up --build
```

Open `http://localhost:8080`. The container health endpoint is `http://localhost:8080/api/health`.

Build the image directly:

```bash
docker build -t milosz-app:local .
docker run --rm -p 8080:8080 milosz-app:local
```

Tag and publish to Docker Hub after authenticating with Docker Hub:

```bash
docker login
docker build -t DOCKERHUB_USERNAME/milosz-app:latest .
docker push DOCKERHUB_USERNAME/milosz-app:latest
```

Do not commit Docker credentials or connection strings containing secrets.

## Docker Swarm

The root Compose file includes `deploy` settings for Swarm. After the image has been pushed to a registry reachable by the Swarm nodes:

```bash
docker swarm init
docker stack deploy -c examples/docker-compose.yml milosz

docker stack services milosz
docker stack ps milosz
```

For a private Docker Hub image, authenticate each Swarm node or deploy with the appropriate registry credentials. Remove the stack with:

```bash
docker stack rm milosz
```

## Project layout

```text
src/                         Angular portfolio UI and source imagery
api/MiloszApp.Api/           .NET 10 API, health endpoint, EF Core context
api/MiloszApp.sln            Backend solution
Dockerfile                   Multi-stage frontend/backend production image
docker-compose.yml           Local build and Swarm-compatible Compose
examples/docker-compose.yml  Pull-based Swarm deployment example
SPEC.md                      Approved implementation specification
```

## Content and assets

Content and imagery are adapted from the existing public portfolio. Source project links remain external and open in a new tab. The site does not include third-party analytics in this initial version.
