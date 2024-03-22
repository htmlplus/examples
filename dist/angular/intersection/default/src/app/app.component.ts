import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/intersection.js';
import '@htmlplus/ui/sticky.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('status')
  statusRef!: ElementRef;
  onPlusChange(event) {
    this.statusRef.nativeElement.innerHTML = event.detail.isIntersecting
      ? 'In Viewport'
      : 'Out of Viewport';
  }
}
