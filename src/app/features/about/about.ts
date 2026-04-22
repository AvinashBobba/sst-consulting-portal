import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { companyProfile } from '../../shared/content/site-content';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly company = companyProfile;
  readonly valueCards = [
    {
      title: 'Industry Experience',
      text: 'Experienced consultants who understand the delivery pressures of regulated and quality-driven environments.'
    },
    {
      title: 'Tailored Delivery',
      text: 'Engagements shaped around your system landscape, business processes, and internal team structure.'
    },
    {
      title: 'Compliance Focus',
      text: 'A practical delivery model centered on traceability, risk awareness, and operational sustainability.'
    },
    {
      title: 'Knowledge Transfer',
      text: 'Documentation and handoff practices that help internal teams own the platform long after launch.'
    }
  ];
}
