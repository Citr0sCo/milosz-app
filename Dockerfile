FROM node:22-bookworm-slim AS frontend-build
WORKDIR /workspace
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY angular.json tsconfig*.json ./
COPY src ./src
RUN npm run build

FROM mcr.microsoft.com/dotnet/sdk:10.0 AS backend-build
WORKDIR /src
COPY api/MiloszApp.Api/MiloszApp.Api.csproj api/MiloszApp.Api/
RUN dotnet restore api/MiloszApp.Api/MiloszApp.Api.csproj
COPY api ./api
RUN dotnet publish api/MiloszApp.Api/MiloszApp.Api.csproj -c Release -o /app/publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
ENV ASPNETCORE_HTTP_PORTS=8080
EXPOSE 8080
RUN apt-get update \
    && apt-get install -y --no-install-recommends curl \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir -p /app/assets \
    && chown -R $APP_UID:$APP_UID /app
COPY --from=backend-build /app/publish .
COPY --from=frontend-build /workspace/dist/milosz-app/browser ./wwwroot
USER $APP_UID
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD curl --fail --silent http://localhost:8080/api/health || exit 1
ENTRYPOINT ["dotnet", "MiloszApp.Api.dll"]
