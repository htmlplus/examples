import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/core/card-body.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/intersection.js';
import '@htmlplus/core/sticky.js';

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
