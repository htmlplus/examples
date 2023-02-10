import { Component } from '@angular/core';
import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toBase64() {
    const image = new Image();
    image.src = window.cropper2.toCanvas().toDataURL();
    const tab = window.open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  }
}
