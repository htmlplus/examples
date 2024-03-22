import { Component } from '@angular/core';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/cropper.js';
import '@htmlplus/ui/dialog-body.js';
import '@htmlplus/ui/dialog-content.js';
import '@htmlplus/ui/dialog-footer.js';
import '@htmlplus/ui/dialog-header.js';
import '@htmlplus/ui/dialog-toggler.js';
import '@htmlplus/ui/dialog.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  disabled = true;
  onPlusOpened() {
    this.disabled = false;
  }
  onPlusClosed() {
    this.disabled = true;
  }
}
