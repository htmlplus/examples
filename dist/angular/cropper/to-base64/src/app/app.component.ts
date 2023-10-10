import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('cropper')
  cropperRef!: ElementRef;
  onClick() {
    const image = new Image();
    image.src = this.cropperRef.nativeElement.toCanvas().toDataURL();
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  }
}
