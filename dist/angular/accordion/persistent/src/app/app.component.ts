import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('accordions')
  accordionsRef!: ElementRef;
  ngAfterViewInit() {
    Array.from(this.accordionsRef.nativeElement.children).forEach(
      (accordion, index, accordions) => {
        accordion.addEventListener('plus-expand', (event) => {
          accordions.forEach((accordion) => {
            accordion.open = event.target == accordion;
          });
        });
      }
    );
  }
}
