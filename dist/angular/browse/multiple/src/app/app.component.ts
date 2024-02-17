import { Component } from '@angular/core';

import '@htmlplus/core/browse.js';
import '@htmlplus/core/center.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onPlusChange(event) {
    alert(`${event.detail.files.length} file(s) are selected.`);
  }
}
