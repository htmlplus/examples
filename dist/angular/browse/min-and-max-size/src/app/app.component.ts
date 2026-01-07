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
    const { errors, file } = event.detail.files[0];
    if (errors.length) {
      alert(errors[0].message);
    } else {
      alert(`File '${file.name}' selected.`);
    }
  }
}
