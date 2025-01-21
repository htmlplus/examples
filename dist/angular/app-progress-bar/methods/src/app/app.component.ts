import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/app-progress-bar.js';
import '@htmlplus/ui/stack.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appProgressBar')
  appProgressBarRef!: ElementRef;
  onClick1() {
    this.appProgressBarRef.nativeElement?.start();
  }
  onClick2() {
    this.appProgressBarRef.nativeElement?.set(0.4);
  }
  onClick3() {
    this.appProgressBarRef.nativeElement?.increase();
  }
  onClick4() {
    this.appProgressBarRef.nativeElement?.trickle();
  }
  onClick5() {
    this.appProgressBarRef.nativeElement?.done();
  }
  onClick6() {
    this.appProgressBarRef.nativeElement?.done(true);
  }
}
