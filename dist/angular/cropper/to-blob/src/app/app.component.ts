import { Component } from '@angular/core';
import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toBlob() {
    window.cropper3.toCanvas().toBlob((blob) => {
      console.log(blob);
    });
  }
}