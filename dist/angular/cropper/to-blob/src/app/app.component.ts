import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/cropper.js';

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
      console.log(blob);
    });
  }
}
