export type ProjectCategory = 'web' | 'commerce' | 'lab';

export interface Project {
  title: string;
  url: string;
  image: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'mail' | 'facebook' | 'twitter' | 'linkedin' | 'github';
}

export const projects: Project[] = [
  { title: 'Stonehouse Properties', url: 'https://stonehouseproperties.co.uk/', image: 'stonehouse-logo.png', description: 'Property business website.', tags: ['Web', 'Business'], category: 'web', featured: true },
  { title: 'Staffordshire Garden Supplies', url: 'https://staffordshiregardensupplies.co.uk/', image: 'stafforshiregarden-logo.png', description: 'Garden supplies business website.', tags: ['Web', 'Business'], category: 'commerce' },
  { title: "Carthy's Tackle", url: 'https://www.carthystackle.co.uk/', image: 'carthystackle-logo.png', description: 'Retail website for a specialist tackle business.', tags: ['Web', 'Commerce'], category: 'commerce' },
  { title: 'Acquire Properties', url: 'https://acquireproperties.co.uk/', image: 'acquire-logo.png', description: 'Property business website.', tags: ['Web', 'Business'], category: 'web' },
  { title: 'EliteMI', url: 'https://elitemi.co.uk/', image: 'elitemi-logo.png', description: 'Business website.', tags: ['Web', 'Business'], category: 'web' },
  { title: 'Ragni Trowels', url: 'https://www.ragnitrowels.com/', image: 'ragni-logo.png', description: 'Manufacturer website for Ragni Trowels.', tags: ['Web', 'Commerce'], category: 'commerce' },
  { title: 'LNH Recruitment', url: 'https://www.lnhrecruitment.co.uk/', image: 'lnh-logo.png', description: 'Recruitment business website.', tags: ['Web', 'Business'], category: 'web' },
  { title: 'iCars', url: 'https://icarsltd.com/', image: 'icars.png', description: 'Taxi company website built with Angular 2 and a vanilla PHP backend, including address lookup, quoting, and booking APIs.', tags: ['Angular', 'PHP', 'APIs'], category: 'web', featured: true },
  { title: 'Bulkeley Evans', url: 'http://gap-year-the-bulkeley-evans.co.uk/', image: 'bulkeley-evans.png', description: 'Charity website written in PHP using SilverStripe and jQuery.', tags: ['PHP', 'SilverStripe'], category: 'web' },
  { title: 'Project 66', url: 'http://project66.co.uk/', image: 'project-66.png', description: 'Charity website written in PHP using Laravel and jQuery.', tags: ['PHP', 'Laravel'], category: 'web' },
  { title: 'Alphabet Soup', url: 'http://alphabet-soup.co.uk/', image: 'alphabet-soup.png', description: 'Business website written in PHP using Laravel and jQuery.', tags: ['PHP', 'Laravel'], category: 'web' },
  { title: 'Eurogel', url: 'http://eurogel.co.uk/', image: 'eurogel.png', description: 'Family-run business website written in PHP using jQuery.', tags: ['PHP', 'jQuery'], category: 'web' },
  { title: 'Docks Defender!', url: 'https://docksdefender.miloszdura.com/', image: 'docksDefender.png', description: 'A JavaScript game created during spare time.', tags: ['JavaScript', 'Game'], category: 'lab', featured: true },
  { title: 'Radio Maxx', url: 'https://radiomaxxx.miloszdura.com/', image: 'radiomaxxx.jpg', description: 'An internet radio station project.', tags: ['Web', 'Media'], category: 'lab' },
  { title: 'Gaming-Passion', url: 'https://techblog.miloszdura.com/', image: 'gamingPassion.jpg', description: 'A website based around news and reviews of video games.', tags: ['Web', 'Editorial'], category: 'lab' },
  { title: 'Chocbox', url: 'https://chocbox.miloszdura.com/', image: 'chocbox.jpg', description: 'An exciting chocolate creation kit website.', tags: ['Web', 'Commerce'], category: 'commerce' }
];

export const education = [
  { year: '2009 — 2012', title: 'Blessed Robert Sutton Catholic Sport College', detail: '8 GCSEs', image: 'robert.jpg', number: '01' },
  { year: '2012 — 2014', title: 'Stapenhill Post 16 Centre', detail: 'Double ICT & Maths', image: 'stapen.jpg', number: '02' },
  { year: '2014 — 2018', title: 'Staffordshire University', detail: 'Web Development', image: 'staffs.jpg', number: '03' }
];

export const socialLinks: SocialLink[] = [
  { label: 'Email', url: 'mailto:milosz.dura@gmail.com', icon: 'mail' },
  { label: 'Facebook', url: 'https://www.facebook.com/miloszdura', icon: 'facebook' },
  { label: 'Twitter / X', url: 'https://twitter.com/MiloszDura', icon: 'twitter' },
  { label: 'LinkedIn', url: 'https://uk.linkedin.com/in/miloszdura', icon: 'linkedin' },
  { label: 'GitHub', url: 'https://github.com/citr0s', icon: 'github' }
];
