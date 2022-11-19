import { Component } from '@angular/core';
import '@htmlplus/core/animation.js';
import '@htmlplus/core/intersection.js';
import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  run = false;
  onChange(event) {
    this.run = event.detail.isIntersecting;
  }
}
