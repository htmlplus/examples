import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/counter.js';
import '@htmlplus/ui/intersection.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('counter')
  counterRef!: ElementRef;
  onPlusChange(event) {
    this.counterRef.nativeElement.play = event.detail.isIntersecting;
  }
}
