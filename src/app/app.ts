import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Home } from './features/home/home';
import { Careers } from './features/careers/careers';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';

@Component({
   selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Home,
    Careers,
    About,
    Contact
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
