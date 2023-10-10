import { Component } from '@angular/core';

import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onPlusCollapse(event) {
    if (confirm('Are you sure you want to collapse it?')) return;
    event.preventDefault();
  }
  onPlusExpand(event) {
    if (confirm('Are you sure you want to expand it?')) return;
    event.preventDefault();
  }
}
