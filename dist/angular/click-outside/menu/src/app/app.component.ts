import { Component } from '@angular/core';

import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/click-outside.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hidden = true;
  onClick() {
    this.hidden = !this.hidden;
  }
  onPlusClickOutside() {
    this.hidden = true;
  }
}
