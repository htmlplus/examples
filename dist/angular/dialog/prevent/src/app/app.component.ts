import { Component } from '@angular/core';

import '@htmlplus/core/center.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-footer.js';
import '@htmlplus/core/dialog-header.js';
import '@htmlplus/core/dialog-toggler.js';
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/faker.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onPlusOpen(event) {
    if (confirm('Are you sure you want to open it?')) return;
    event.preventDefault();
  }
  onPlusClose(event) {
    if (confirm('Are you sure you want to close it?')) return;
    event.preventDefault();
  }
}
