import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { education, projects, socialLinks } from './portfolio-data';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
  });

  function createFixture() {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('renders the portfolio identity and all projects by default', () => {
    const fixture = createFixture();
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('h1')?.textContent).toContain('Ideas into');
    expect(root.querySelector('#work')).not.toBeNull();
    expect(root.querySelectorAll('.project-card').length).toBe(projects.length);
    expect(root.querySelector('.filter-bar button')?.classList).toContain('filter-active');
  });

  it('filters projects by category', () => {
    const fixture = createFixture();
    const component = fixture.componentInstance;

    component.setFilter('commerce');
    fixture.detectChanges();

    const expectedProjects = projects.filter(project => project.category === 'commerce');
    expect(component.filteredProjects()).toEqual(expectedProjects);
    expect(fixture.nativeElement.querySelectorAll('.project-card').length).toBe(expectedProjects.length);
    expect(fixture.nativeElement.querySelector('.filter-bar button:nth-child(3)')?.classList).toContain('filter-active');
  });

  it('updates the active filter when a filter button is clicked', () => {
    const fixture = createFixture();
    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;

    buttons[1].click();
    fixture.detectChanges();
    expect(fixture.componentInstance.activeFilter()).toBe('web');
    expect(fixture.nativeElement.querySelectorAll('.project-card').length).toBe(
      projects.filter(project => project.category === 'web').length
    );

    buttons[3].click();
    fixture.detectChanges();
    expect(fixture.componentInstance.activeFilter()).toBe('lab');
    expect(fixture.nativeElement.querySelectorAll('.project-card').length).toBe(
      projects.filter(project => project.category === 'lab').length
    );
  });

  it('renders education cards and their image metadata', () => {
    const fixture = createFixture();
    const root = fixture.nativeElement as HTMLElement;
    const images = root.querySelectorAll('.education-card img');

    expect(root.querySelectorAll('.education-card').length).toBe(education.length);
    expect(images[0].getAttribute('src')).toBe(`assets/portfolio/${education[0].image}`);
    expect(images[0].getAttribute('alt')).toBe(education[0].title);
  });

  it('renders project links with safe external-link attributes', () => {
    const fixture = createFixture();
    const root = fixture.nativeElement as HTMLElement;
    const firstProject = root.querySelector('.project-card') as HTMLAnchorElement;

    expect(firstProject.href).toBe(projects[0].url);
    expect(firstProject.target).toBe('_blank');
    expect(firstProject.rel).toBe('noopener noreferrer');
    expect(root.querySelectorAll('.project-card--featured').length).toBe(
      projects.filter(project => project.featured).length
    );
  });

  it('renders every social link and only opens external links in a new tab', () => {
    const fixture = createFixture();
    const links = fixture.nativeElement.querySelectorAll('.social-links a') as NodeListOf<HTMLAnchorElement>;

    expect(links.length).toBe(socialLinks.length);
    socialLinks.forEach((link, index) => {
      expect(links[index].href).toBe(link.url);
      expect(links[index].getAttribute('aria-label')).toBe(link.label);
      expect(links[index].getAttribute('target')).toBe(link.icon === 'mail' ? null : '_blank');
    });
  });

  it('shows the current year in the footer', () => {
    const fixture = createFixture();
    const footer = fixture.nativeElement.querySelector('.footer-bottom')?.textContent ?? '';

    expect(footer).toContain(`© 2015 - ${new Date().getFullYear()}`);
  });
});
