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
    if (event.detail.error) {
      alert(event.detail.error.message);
    } else {
      alert(`${event.detail.files.length} file(s) are selected.`);
    }
  }
}
