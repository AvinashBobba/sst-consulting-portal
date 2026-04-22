import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { companyProfile, getServiceById, services } from '../../shared/content/site-content';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.scss'
})
export class ServiceDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly serviceId = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('serviceId'))),
    { initialValue: services[0].id }
  );

  readonly company = companyProfile;
  readonly services = services;
  readonly service = computed(() => getServiceById(this.serviceId()));
}
