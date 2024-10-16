import { Component } from '@angular/core';

import '@htmlplus/ui/relative-time.js';
import '@htmlplus/ui/stack.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value2 = new Date(Date.now() - 24 * 60 * 60 * 1000);
  value1 = new Date(Date.now() - 24 * 60 * 60 * 1000);
}
