import { Component } from '@angular/core';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onPlusAfter(event) {
    console.log('after', event.detail);
  }
  onPlusBefore(event) {
    console.log('before', event.detail);
  }
  onPlusChange(event) {
    console.log('change', event.detail);
  }
  onPlusEnd(event) {
    console.log('end', event.detail);
  }
  onPlusReady() {
    console.log('ready');
  }
  onPlusStart(event) {
    console.log('start', event.detail);
  }
}
