import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
   standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() navigate = new EventEmitter<string>();

  onNavClick(sectionId: string) {
    this.navigate.emit(sectionId);
  }
}
