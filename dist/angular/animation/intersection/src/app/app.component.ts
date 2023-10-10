import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/core/animation.js';
import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
import '@htmlplus/core/intersection.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('animation')
  animationRef!: ElementRef;
  onPlusChange(event) {
    this.animationRef.nativeElement.run = event.detail.isIntersecting;
  }
}
