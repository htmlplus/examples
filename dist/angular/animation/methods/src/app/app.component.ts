import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/core/animation.js';
import '@htmlplus/core/center.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('animation')
  animationRef!: ElementRef;
  onClick1() {
    this.animationRef.nativeElement.cancel();
  }
  onClick2() {
    this.animationRef.nativeElement.finish();
  }
  onClick3() {
    this.animationRef.nativeElement.pause();
  }
  onClick4() {
    this.animationRef.nativeElement.play();
  }
}
