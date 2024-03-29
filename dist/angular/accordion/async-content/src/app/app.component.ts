import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/progress-bar.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('accordion')
  accordionRef!: ElementRef;
  hidden = true;
  onPlusExpand(event) {
    event.preventDefault();
    this.hidden = false;
    setTimeout(() => {
      this.hidden = true;
      this.accordionRef.nativeElement.open = true;
    }, 2500);
  }
}
