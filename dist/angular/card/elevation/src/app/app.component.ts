import { Component } from '@angular/core';

import '@htmlplus/ui/card.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elevation = 24;
  onChange(event) {
    this.elevation = event.target.value;
  }
}
