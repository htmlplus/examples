import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/app-progress-bar.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appProgressBar3')
  appProgressBar3Ref!: ElementRef;
  @ViewChild('appProgressBar2')
  appProgressBar2Ref!: ElementRef;
  @ViewChild('appProgressBar1')
  appProgressBar1Ref!: ElementRef;
  ngAfterViewInit() {
    requestAnimationFrame(() => {
      this.appProgressBar1Ref.nativeElement.start();
      this.appProgressBar2Ref.nativeElement.start();
      this.appProgressBar3Ref.nativeElement.start();
    });
  }
}
