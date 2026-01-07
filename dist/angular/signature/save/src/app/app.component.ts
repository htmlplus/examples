import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';
import '@htmlplus/ui/stack.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signature')
  signatureRef!: ElementRef;
  onClick1() {
    console.log(this.signatureRef.nativeElement.toDataURL());
  }
  onClick2() {
    console.log(this.signatureRef.nativeElement.toSVG());
  }
  onClick3() {
    console.log(this.signatureRef.nativeElement.value);
  }
}
