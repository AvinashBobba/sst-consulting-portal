import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { companyProfile, services } from '../../shared/content/site-content';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  readonly services = services;
  readonly engagementModels = companyProfile.engagementModels;
  readonly deliveryPrinciples = companyProfile.operatingPrinciples;
}
