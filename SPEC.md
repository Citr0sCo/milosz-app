# MiloszDura.com portfolio rebuild — specification

**Status:** Approved
**Prepared:** 2026-08-01
**Proposed repository:** `Citr0sCo/milosz-app`
**Implementation must not begin until this specification is approved.**

## 1. Goal

Create a new version of [miloszdura.com](https://miloszdura.com/) as a polished, responsive portfolio for Milosz Dura, positioned as a software engineer and web developer. The new site will retain the useful factual content and project links from the existing site while replacing the legacy Bootstrap/jQuery presentation with a dark, modern Angular interface and subtle animated background elements.

The project will use the existing `Citr0sCo/citr0s-app` repository as the structural reference, Angular 22 (the current major version verified during discovery), .NET 10, Entity Framework Core, and Docker. The application will be deployable as one container and will include Docker Compose and Docker Swarm examples.

## 2. Approval contract

- This file is the implementation plan and acceptance contract.
- Before approval, only discovery and this specification may be changed.
- After approval, implementation may begin in the order in Section 8.
- Any material change to scope, repository name, content, or deployment approach will be reported for approval before proceeding.
- GitHub repository creation, commit, and push are planned only after approval and successful local validation.

## 3. Source content to retain and adapt

The following content has been captured from the current public site and will be reused, edited only where needed for clarity, accuracy, accessibility, or modern presentation:

### Identity and hero

- Name: **Milosz Dura**
- Current positioning: **Web Developer + Geek**
- New positioning direction: software engineer / web developer while retaining the original identity.
- Footer credit and copyright year will be generated dynamically rather than hard-coded.

### About

Retain the existing story in a concise, readable form:

- Milosz is a Software Engineer at Codeweavers.
- He discovered the Web in high school and developed a lasting interest in creating and managing websites.
- Backend web programming is the primary passion, with continued enjoyment of HTML, CSS, and JavaScript frontend work.
- Past work includes school and client websites, frontend-only projects, and PHP backends using frameworks and CMS platforms.
- Ongoing learning and experimentation remain a central part of the journey.

The existing headshot will be reused if it can be retrieved in an acceptable quality and the user has the right to republish it. Otherwise, the implementation will use a clearly marked placeholder or omit it rather than fabricate a portrait.

### Education

Retain these three entries and their stated dates/subjects:

1. **Staffordshire University** — 2014–2018 — Web Development
2. **Stapenhill Post 16 Centre** — 2012–2014 — Double ICT & Maths
3. **Blessed Robert Sutton Catholic Sport College** — 2009–2012 — 8 GCSEs

The existing education imagery will be reused only when retrieval and reuse are appropriate; otherwise, the cards will use abstract visual treatments.

### Skills and experience

Retain the three original capability groups, modernized into concise copy:

- **Frontend:** HTML, CSS, JavaScript, Bootstrap, Foundation, Sass, jQuery, Vue.js, AngularJS, and NGX.
- **Backend:** PHP and C#, with MySQL, PostgreSQL, and Cassandra; Laravel, Symfony, MVC, and Web API.
- **Experience:** almost a decade of professional software development experience at the time of the source page, Git and Subversion, plus WordPress, SilverStripe, and Perch.

The age-sensitive “almost a decade” wording will be reviewed during implementation. Unless the user supplies an updated figure, it will be phrased neutrally as “years of professional software development experience” to avoid presenting stale information as current.

### Portfolio projects

Retain the source project names, links, and descriptions where present. The portfolio will present them as accessible project cards with external-link affordances and technology/category tags where those tags are supported by the source content:

- Stonehouse Properties — https://stonehouseproperties.co.uk/
- Staffordshire Garden Supplies — https://staffordshiregardensupplies.co.uk/
- Carthy’s Tackle — https://www.carthystackle.co.uk/
- Acquire Properties — https://acquireproperties.co.uk/
- EliteMI — https://elitemi.co.uk/
- Ragni Trowels — https://www.ragnitrowels.com/
- LNH Recruitment — https://www.lnhrecruitment.co.uk/
- iCars — https://icarsltd.com/ — Angular 2 and vanilla PHP; address lookup, quoting, and booking APIs.
- Bulkeley Evans — http://gap-year-the-bulkeley-evans.co.uk/ — PHP, SilverStripe, and jQuery charity website.
- Project 66 — http://project66.co.uk/ — PHP, Laravel, and jQuery charity website.
- Alphabet Soup — http://alphabet-soup.co.uk/ — PHP, Laravel, and jQuery business website.
- Eurogel — http://eurogel.co.uk/ — PHP and jQuery business website.
- Docks Defender! — https://docksdefender.miloszdura.com/ — JavaScript game.
- Radio Maxx — https://radiomaxx.miloszdura.com/ — Internet radio station.
- Gaming-Passion — https://techblog.miloszdura.com/ — gaming news and reviews website.
- Chocbox — https://chocbox.miloszdura.com/ — chocolate creation kit website.

Links will open in a new tab with `noopener noreferrer`. Legacy `http` URLs will be checked during implementation; if HTTPS is available, the HTTPS URL will be preferred. Broken or unsafe links will be reported rather than silently removed.

### Contact and social links

Retain the contact intent and existing public links:

- “Let’s work together” call to action.
- Email contact link from the source site, with the address represented through a safe configuration value rather than copying Cloudflare’s obfuscated URL.
- Facebook: https://www.facebook.com/miloszdura
- Twitter/X source link: https://twitter.com/MiloszDura
- LinkedIn: https://uk.linkedin.com/in/miloszdura
- GitHub: https://github.com/citr0s

No analytics script will be added in the initial implementation unless explicitly requested. This avoids carrying over a third-party tracking dependency by accident.

## 4. User experience and visual direction

### Overall style

- Dark-first, high-contrast interface with near-black navy surfaces, cool gray text, and a restrained citrus/green accent inspired by the `citr0s` identity.
- Editorial portfolio layout rather than a generic dashboard.
- Strong typographic hierarchy, generous whitespace, crisp borders, soft gradients, and restrained glass effects.
- Modern software-engineering visual language: terminal-like labels, code-inspired metadata, system diagrams, and monospace accents used selectively.
- Avoid excessive glow, noisy particle effects, stock imagery, and generic “AI landing page” styling.

### Motion and animated background

- Hero background: layered radial gradients, slow-moving grid/orbital lines, and a small number of animated accent nodes.
- Section transitions: subtle reveal animations triggered by intersection observation.
- Portfolio cards: hover/focus elevation and border/accent transitions.
- Respect `prefers-reduced-motion: reduce`; all nonessential animation must be disabled or simplified.
- Use CSS animations and lightweight Angular state rather than a large canvas/particle dependency unless testing demonstrates a real need.

### Page structure

1. Sticky or compact responsive navigation with initials/logo and section links.
2. Hero: name, role, short value proposition, primary contact CTA, secondary portfolio CTA, and animated background.
3. About: headshot/visual, source biography, and selected engineering highlights.
4. Education: three responsive timeline/card entries.
5. Skills: frontend, backend, and experience cards with technology chips.
6. Portfolio: filterable or grouped responsive project grid, with accessible cards and external links.
7. Contact: collaboration CTA, email, and social links.
8. Footer with dynamic year and attribution.

### Accessibility and responsive behavior

- Semantic landmarks, one logical `h1`, ordered heading hierarchy, keyboard navigation, visible focus states, descriptive link text, and alt text.
- Mobile-first layout supporting small phones through wide desktop screens.
- Navigation must remain usable without hover and support reduced motion.
- External links and icon-only controls must have accessible names.
- Color contrast must meet WCAG AA for normal text where practical.

## 5. Technical architecture

### Repository structure

Use `Citr0sCo/citr0s-app` as the baseline for organization and conventions, adapted to this portfolio:

```text
.
├── .github/workflows/
├── api/
│   ├── MiloszApp.Api/
│   │   ├── Core/
│   │   ├── Data/
│   │   │   └── Migrations/
│   │   ├── Endpoints/ or Controllers/
│   │   ├── Properties/
│   │   └── wwwroot/
│   └── MiloszApp.sln
├── examples/
│   └── docker-compose.yml
├── src/
│   ├── app/
│   ├── assets/
│   ├── environments/
│   └── styles/
├── Dockerfile
├── docker-compose.yml
├── angular.json
├── package.json
├── README.md
└── SPEC.md
```

The final names may be adjusted to match Angular/.NET generator output, but the frontend/backend split and `citr0s-app` conventions will remain recognizable.

### Frontend

- Angular 22 standalone components and the current Angular CLI toolchain.
- TypeScript with strict compiler settings.
- SCSS with design tokens for colors, type, spacing, radii, and motion.
- Angular Router only if it improves structure; a single-page section layout is acceptable and preferred initially.
- Content represented through typed models/configuration so the portfolio can later be managed through the API without rewriting presentation components.
- Unit tests for core rendering/content behavior and any nontrivial filtering or navigation logic.
- Production build output copied into the .NET `wwwroot` directory by the multi-stage Docker build.

### Backend

- ASP.NET Core .NET 10 web application.
- REST endpoint for health/readiness, such as `GET /api/health`, returning a simple structured status response.
- Optional read-only portfolio content endpoint, such as `GET /api/portfolio`, only if it provides real value without duplicating static frontend content unnecessarily.
- Static-file hosting and SPA fallback from the .NET host in production.
- Development Swagger/OpenAPI only; no public admin/authentication surface in this initial scope.
- CORS configured conservatively for development; production should serve frontend and API from the same origin.

### Persistence and future migrations

- Add Entity Framework Core 10 and SQLite provider, following the basis repository’s `DatabaseContext` and `Migrations` conventions.
- Register a dedicated `DbContext` and configuration path through appsettings/environment variables.
- Keep the application runnable without a database for the initial static portfolio path, or use a small health/configuration persistence model only if required by the chosen implementation.
- Include EF design/tooling packages and documented commands for `dotnet ef migrations add` and `dotnet ef database update`.
- Do not invent a business schema merely to create an unused migration. If no persisted data is needed, leave the migrations folder ready and explain the first-migration command in the README.
- Avoid destructive or automatic production schema changes. If startup migration application is included, it must be explicitly configurable and documented.

## 6. Containerization and deployment

### Dockerfile

Create a multi-stage Linux Dockerfile based on the source repository’s pattern:

1. Node build stage installs frontend dependencies and produces the Angular production build.
2. .NET SDK 10 build/publish stage restores, builds, and publishes the API.
3. ASP.NET Core 10 runtime stage copies published API files and Angular output into `wwwroot`.
4. Expose a documented HTTP port, use a non-root runtime user where compatible, and define a healthcheck or healthcheck guidance.
5. Ensure no secrets, local caches, `node_modules`, build outputs, or development databases enter the image.

### Docker Compose

Root `docker-compose.yml` must provide a runnable single-service example with:

- Build context and image name placeholders suitable for Docker Hub, e.g. `DOCKERHUB_USERNAME/milosz-app:${TAG:-latest}`.
- Port mapping via environment variables.
- Restart policy, healthcheck, and named volume only if the selected persistence path needs one.
- Clear comments for local build versus pulling a Docker Hub image.

`examples/docker-compose.yml` may show a production-oriented pull-based deployment and environment overrides.

### Docker Swarm

The compose file must remain compatible with `docker stack deploy` as far as Compose/Swarm supports. Include a documented Swarm command example and use deploy settings that are valid for Swarm, such as replicas, rolling update behavior, restart condition, and published ports. Do not require a private registry or secret to run the local build example.

### Docker Hub buildability

- Add README commands for `docker build`, local `docker compose up --build`, tagging, and `docker push`.
- Add optional GitHub Actions workflow scaffolding for build/test and Docker image build/publish, with publishing gated behind repository secrets. Do not attempt to publish without credentials or explicit setup.
- Use a configurable image name; do not hard-code a credential or token.

## 7. GitHub and version control plan

After approval and implementation validation:

1. Confirm the actual organization access and repository-name availability through the GitHub API.
2. Create one new public repository under `Citr0sCo` using the approved name (proposed: `milosz-app`).
3. Initialize the local repository on a feature branch rather than pushing directly to `main`.
4. Add source, tests, Docker files, workflows, README, license handling, and this approved specification.
5. Commit with a focused message and the required OpenHands co-author trailer.
6. Push the feature branch to the newly created repository.
7. If the user wants review workflow, open one pull request against `main`; otherwise report the branch and commit URL. No direct push to `main` is planned.

The GitHub API will be used rather than browser automation. Repository creation or push will occur only after the approval gate and after local checks pass.

## 8. Required implementation order after approval

1. **Lock the approved scope and resolve open decisions.** Confirm repository name, whether the headshot/assets may be reused, and any updated biography, employer, skills, or contact details supplied by the user.
2. **Create the project baseline.** Bring over the relevant `citr0s-app` structure and adapt names, Angular configuration, .NET solution, and ignore rules.
3. **Capture and normalize content.** Add typed portfolio/about/education/skills/contact data and retrieve only approved source assets.
4. **Build the visual system.** Implement dark theme tokens, responsive layout primitives, typography, accessibility states, and reduced-motion behavior.
5. **Implement the Angular page.** Build hero, navigation, about, education, skills, portfolio, contact, and footer sections; add animated background elements and responsive interactions.
6. **Implement the .NET host.** Add health endpoint, static file/SPA hosting, environment configuration, Swagger development support, and EF Core migration-ready setup.
7. **Add tests.** Test Angular rendering/content and backend health/configuration paths using real code paths; avoid mocks unless technically unavoidable.
8. **Containerize.** Add/verify Dockerfile, root Compose file, Swarm-compatible example, healthcheck, and deployment documentation.
9. **Run validation.** Run dependency install, Angular lint/build/test, .NET restore/build/test (where SDK availability permits), Docker build, and a container smoke test. Fix issues before publication.
10. **Publish.** Create the GitHub repository under `Citr0sCo`, commit, push the feature branch, and optionally open one pull request if requested.
11. **Final review.** Verify production rendering, links, keyboard navigation, reduced motion, image loading, container health, and README instructions. Report URLs, commit SHA, checks, and any limitations.

## 9. Acceptance criteria

### Product

- The portfolio is recognizably based on Milosz Dura’s existing site content and retains the listed biography, education, skills, projects, and public contact/social links unless an approved content correction supersedes them.
- The interface is dark, modern, responsive, and visually distinct from the legacy Bootstrap/jQuery site.
- Animated background elements are present but subtle, performant, and disabled/reduced for users who request reduced motion.
- Navigation and all content sections work on mobile and desktop.
- Project links are usable, clearly external, and safely opened.

### Engineering

- Angular uses the current approved Angular major version at implementation time, with the exact resolved version recorded in the lockfile.
- Backend targets .NET 10 and builds successfully with the intended SDK/container.
- EF Core setup supports future migrations without requiring a schema that is not needed by the initial portfolio.
- Frontend and backend are served together successfully from the production container.
- `docker compose up --build` starts the application locally.
- The image can be tagged for Docker Hub and the stack definition can be deployed with `docker stack deploy` after image publication.
- README documents local development, tests, migrations, Docker, Docker Hub, and Swarm commands.
- No credentials, tracking keys, obfuscated email tokens, or environment secrets are committed.

### Quality

- Automated tests and production builds pass, or any unavailable local toolchain limitation is explicitly reported.
- The app includes semantic HTML, keyboard focus states, meaningful labels/alt text, and a reduced-motion media query.
- No unresolved console errors, broken local asset references, or placeholder copy remain in the delivered build.
- Git history contains a clear implementation commit and the published repository URL/branch is reported.

## 10. Decisions needed from the user before implementation

Please approve this specification and, if desired, provide corrections for any of the following:

1. **Repository name:** accept `Citr0sCo/milosz-app` or provide another name.
2. **Content updates:** any current employer, role title, experience wording, skills, project links, or social links that should replace the source values.
3. **Asset rights:** confirm that the existing headshot and project/education images may be reused, or instruct the implementation to use abstract/placeholding visuals.
4. **Email:** confirm the preferred public contact address or allow the existing source-site email link to be preserved without exposing it in this specification.
5. **Publishing workflow:** after creation, should I push a feature branch only, or also open one pull request against `main`?

**Approval instruction:** Reply with “Approved” to accept this plan as written, or list the requested changes. No implementation or GitHub publication will start before approval.
