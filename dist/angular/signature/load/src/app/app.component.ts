import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('signature')
  signatureRef!: ElementRef;
  onClick() {
    this.signatureRef.nativeElement.value = [
      {
        penColor: 'black',
        dotSize: 0,
        minWidth: 0.5,
        maxWidth: 2.5,
        velocityFilterWeight: 0.7,
        compositeOperation: 'source-over',
        points: [
          {
            time: 1765999675208,
            x: 103.33203125,
            y: 101.4375,
            pressure: 0.5
          },
          {
            time: 1765999675347,
            x: 111.4140625,
            y: 94.11328125,
            pressure: 0.5
          },
          {
            time: 1765999675364,
            x: 123.234375,
            y: 84.05078125,
            pressure: 0.5
          },
          {
            time: 1765999675379,
            x: 151.421875,
            y: 63.6484375,
            pressure: 0.5
          },
          {
            time: 1765999675396,
            x: 174.16015625,
            y: 48.421875,
            pressure: 0.5
          },
          {
            time: 1765999675413,
            x: 186.0390625,
            y: 41.5390625,
            pressure: 0.5
          },
          {
            time: 1765999675430,
            x: 191.99609375,
            y: 38.26953125,
            pressure: 0.5
          }
        ]
      }
    ];
  }
}
