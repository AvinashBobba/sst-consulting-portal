import { Component } from '@angular/core';

import { companyProfile } from '../../shared/content/site-content';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  readonly company = companyProfile;
  readonly engagementModels = companyProfile.engagementModels;
  readonly thankYouUrl = '/thank-you';

  isExternal(href: string) {
    return href.startsWith('http');
  }
}
