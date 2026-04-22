import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { companyProfile, services } from '../../shared/content/site-content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  readonly company = companyProfile;
  readonly featuredServices = services.slice(0, 4);
  readonly spotlightService = services[0];
  readonly capabilityCards = [
    {
      title: 'Quality Systems',
      text: 'Delivery models that strengthen document control, review workflows, and quality process reliability.'
    },
    {
      title: 'Validation Programs',
      text: 'Risk-based validation planning, testing support, and traceability for regulated technology changes.'
    },
    {
      title: 'Operational Support',
      text: 'Post-go-live support, training assets, and sustained platform stewardship for business teams.'
    }
  ];
}
