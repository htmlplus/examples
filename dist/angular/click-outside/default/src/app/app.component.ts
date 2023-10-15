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
    const count = this.inside + 1;
    this.inside = count;
    this.insideRef.nativeElement.innerHTML = `${count}`;
  }
  onPlusClickOutside() {
    const count = this.outside + 1;
    this.outside = count;
    this.outsideRef.nativeElement.innerHTML = `${count}`;
  }
}
