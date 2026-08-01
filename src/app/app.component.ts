import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { education, ProjectCategory, projects, socialLinks } from './portfolio-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly projects = projects;
  readonly education = education;
  readonly socialLinks = socialLinks;
  readonly activeFilter = signal<'all' | ProjectCategory>('all');
  readonly currentYear = new Date().getFullYear();
  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all' ? this.projects : this.projects.filter(project => project.category === filter);
  });

  setFilter(filter: 'all' | ProjectCategory): void {
    this.activeFilter.set(filter);
  }
}
