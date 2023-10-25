import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/stack.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('accordion')
  accordionRef!: ElementRef;
  onClick1() {
    this.accordionRef.nativeElement.collapse();
  }
  onClick2() {
    this.accordionRef.nativeElement.expand();
  }
  onClick3() {
    this.accordionRef.nativeElement.toggle();
  }
}
