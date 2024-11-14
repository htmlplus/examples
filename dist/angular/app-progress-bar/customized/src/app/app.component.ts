import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/app-progress-bar.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('appProgressBar')
  appProgressBarRef!: ElementRef;
  ngAfterViewInit() {
    requestAnimationFrame(() => {
      this.appProgressBarRef.nativeElement.start();
    });
    setTimeout(() => {
      this.appProgressBarRef.nativeElement.done();
    }, 5000);
  }
}
