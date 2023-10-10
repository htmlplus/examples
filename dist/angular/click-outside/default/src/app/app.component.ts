import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/core/card-body.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/click-outside.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('outside')
  outsideRef!: ElementRef;
  @ViewChild('inside')
  insideRef!: ElementRef;
  inside = 0;
  outside = 0;
  onClick() {
    this.inside = this.inside + 1;
    this.insideRef.nativeElement.innerHTML = `${this.inside}`;
  }
  onPlusClickOutside() {
    this.outside = this.outside + 1;
    this.outsideRef.nativeElement.innerHTML = `${this.outside}`;
  }
}
