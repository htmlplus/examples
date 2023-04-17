import { Component } from '@angular/core';
import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ensure(type, event) {
    if (window.confirm(`Are you sure you want to ${type} it?`)) return;
    event.preventDefault();
  }
}
