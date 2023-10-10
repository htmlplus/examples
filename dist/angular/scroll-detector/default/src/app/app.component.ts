import { Component } from '@angular/core';

import '@htmlplus/core/faker.js';
import '@htmlplus/core/scroll-detector.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onPlusChange(event) {
    console.log(event.detail);
  }
}
