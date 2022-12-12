import { Component } from '@angular/core';
import '@htmlplus/core/counter.js';
import '@htmlplus/core/intersection.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  play = false;
  onChange(event) {
    this.play = event.detail.isIntersecting;
  }
}
