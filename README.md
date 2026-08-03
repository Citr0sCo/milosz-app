<p align="center">
  <img src="src/assets/portfolio/logo.png" width="100" alt="Logo" >
</p>

<h1 align="center">Milosz Dura</h1>

<p align="center">
<a href="https://github.com/Citr0sCo/milosz-app/actions/workflows/build.yml"><img src="https://github.com/Citr0sCo/milosz-app/actions/workflows/build.yml/badge.svg" alt="Build"></a>
<a href="https://github.com/Citr0sCo/milosz-app/actions/workflows/deploy.yml"><img src="https://github.com/Citr0sCo/milosz-app/actions/workflows/deploy.yml/badge.svg" alt="Publish Docker image"></a>
<a href="https://hub.docker.com/r/citr0s/milosz-app"><img src="https://img.shields.io/docker/image-size/citr0s/milosz-app" alt="Docker Image Size"></a>
<a href="https://hub.docker.com/r/citr0s/milosz-app"><img src="https://img.shields.io/docker/pulls/citr0s/milosz-app" alt="Docker pulls"></a>
<a href="https://hub.docker.com/r/citr0s/milosz-app"><img src="https://img.shields.io/docker/v/citr0s/milosz-app?sort=semver" alt="Docker version"></a>
</p>

<p align="center">
  <a href="https://codecov.io/gh/Citr0sCo/milosz-app"><img src="https://codecov.io/gh/Citr0sCo/milosz-app/branch/main/graph/badge.svg" alt="Code Coverage"></a>
</p>

The Codecov badge above is generated dynamically from the latest `main` branch coverage report. Run `npm run test-ci` locally to generate the same HTML and lcov reports in `coverage/`.

---

<h4 align="center">Milosz Dura's web profile.</h4>

---

## 🛠️ Installation

> [!NOTE]
> To run this application, you'll need [Docker](https://docs.docker.com/engine/install/) with [docker-compose](https://docs.docker.com/compose/install/).

Start off by showing some ❤️ and give this repo a star. Then from your command line:

```bash
# Create a new directory
> mkdir home-app
> cd home-app

# Create docker-compose.yml and copy the example contents into it
> touch docker-compose.yml
> nano docker-compose.yml
```

### docker-compose.yml

```yml
services:
  milosz-app:
    image: citr0s/milosz-app
    ports:
      - '83:80'
    environment:
      - ASPNETCORE_ENVIRONMENT=Production
      - ASPNETCORE_URLS=http://+:80
    volumes:
      - ./assets:/web-api/app/assets

```

---

## 💡 Feature request?

For any feedback, help or feature requests, please [open a new issue](https://github.com/citr0s/milosz-app/issues/new/choose).
Before you do, please read [the wiki](https://github.com/citr0s/milosz-app/wiki). The question you have might be answered over there.