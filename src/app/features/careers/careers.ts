import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
    standalone: true,
  imports: [NgFor],
  templateUrl: './careers.html',
  styleUrl: './careers.scss',
})
export class Careers {
roles = [
    { title: 'Senior Full Stack Engineer', location: 'Remote, US', summary: 'Angular, .NET, Azure.' },
    { title: 'Cloud Architect', location: 'Remote, US', summary: 'Azure, Kubernetes, DevOps.' },
    { title: 'QA Automation Engineer', location: 'Remote, US', summary: 'Cypress, Playwright, CI/CD.' }
  ];
}
