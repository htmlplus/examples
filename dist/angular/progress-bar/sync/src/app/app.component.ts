import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/progress-bar.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('latency')
  latencyRef!: ElementRef;
  @ViewChild('sync')
  syncRef!: ElementRef;
  update() {
    if (!this.syncRef.nativeElement || !this.latencyRef.nativeElement) return;
    const value = Math.random() * 100;
    this.syncRef.nativeElement.value = value;
    this.latencyRef.nativeElement.value = value;
    setTimeout(() => this.update(), 100);
  }
  ngAfterViewInit() {
    this.update();
  }
}
