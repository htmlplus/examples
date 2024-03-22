import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/animation/names/attention-seekers/tada.js';
import '@htmlplus/ui/center.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('animation')
  animationRef!: ElementRef;
  onClick() {
    this.animationRef.nativeElement.run = true;
  }
}
