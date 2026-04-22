import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { companyProfile, partners } from '../../shared/content/site-content';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './partners.html',
  styleUrl: './partners.scss'
})
export class Partners {
  readonly company = companyProfile;
  readonly partners = partners;
}
