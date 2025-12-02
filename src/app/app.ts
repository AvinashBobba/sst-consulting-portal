import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  activeSection: string = 'home';

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection = sectionId;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['home', 'about', 'services', 'partners', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        this.activeSection = id;
        break;
      }
    }
  }
}
