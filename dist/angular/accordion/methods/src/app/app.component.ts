import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/stack.js';

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
