import { Component } from '@angular/core';
import '@htmlplus/core/card.js';
import '@htmlplus/core/card-body.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/click-outside.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  open = false;
  onClick() {
    this.open = !this.open;
  }
  onClickOutside() {
    this.open = false;
  }
}
