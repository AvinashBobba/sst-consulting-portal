import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { navLinks } from '../../../shared/content/site-content';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  readonly navLinks = navLinks;
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  isExact(path: string) {
    return path === '/';
  }
}
