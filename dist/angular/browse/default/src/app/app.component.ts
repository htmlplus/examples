import { Component } from '@angular/core';

import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

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
