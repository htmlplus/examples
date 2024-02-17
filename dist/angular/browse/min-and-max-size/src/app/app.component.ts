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
    if (event.detail.files?.[0]?.errors.length) {
      alert(event.detail.files[0].errors[0].message);
    }
  }
}
