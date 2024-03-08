import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signature')
  signatureRef!: ElementRef;
  onClick() {
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(this.signatureRef.nativeElement.value);
    }, 250);
  }
}
