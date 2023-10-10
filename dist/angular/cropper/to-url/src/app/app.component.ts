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
    this.cropperRef.nativeElement.toCanvas().toBlob((blob) => {
      open(URL.createObjectURL(blob), '_blank');
    });
  }
}
