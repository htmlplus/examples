import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signature')
  signatureRef!: ElementRef;
  onClick() {
    this.signatureRef.nativeElement.value = '';
  }
}
