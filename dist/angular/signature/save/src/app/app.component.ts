import { Component } from '@angular/core';
import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
import '@htmlplus/core/stack.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  save(background) {
    const image = new Image();
    image.src = window.signature3.toDataURL('image/svg+xml', background);
    const tab = window.open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  }
}
