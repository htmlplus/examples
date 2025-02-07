import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/prism.js';
import '@htmlplus/ui/stack.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('prism2')
  prism2Ref!: ElementRef;
  @ViewChild('prism1')
  prism1Ref!: ElementRef;
  onClick() {
    this.prism1Ref.nativeElement.innerHTML = `const now = ${Date.now()};`;
    this.prism2Ref.nativeElement.innerHTML = `const now = ${Date.now()};`;
  }
}
