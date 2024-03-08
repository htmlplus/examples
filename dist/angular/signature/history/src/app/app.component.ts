import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
import '@htmlplus/core/stack.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signature')
  signatureRef!: ElementRef;
  disabled2 = true;
  disabled1 = true;
  sync() {
    this.disabled1 = !this.signatureRef.nativeElement.undoable;
    this.disabled2 = !this.signatureRef.nativeElement.redoable;
  }
  onClick1() {
    this.signatureRef.nativeElement.undo();
    this.sync();
  }
  onClick2() {
    this.signatureRef.nativeElement.redo();
    this.sync();
  }
  onPlusEnd() {
    this.sync();
  }
}
