import { Component } from '@angular/core';
import '@htmlplus/core/scroll-detector.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onChange(event) {
    console.log(event.detail);
  }
}
