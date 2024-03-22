import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';
import '@htmlplus/ui/intersection.js';

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
