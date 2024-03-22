import { Component } from '@angular/core';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/counter.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
}
