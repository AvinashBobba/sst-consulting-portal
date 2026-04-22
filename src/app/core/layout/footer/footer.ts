import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { companyProfile, navLinks } from '../../../shared/content/site-content';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  readonly company = companyProfile;
  readonly navLinks = navLinks;
}
