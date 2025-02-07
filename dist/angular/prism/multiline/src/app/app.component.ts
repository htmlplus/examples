import { Component, ElementRef, ViewChild } from '@angular/core';

import '@htmlplus/ui/prism.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('prism')
  prismRef!: ElementRef;
  ngAfterViewInit() {
    requestAnimationFrame(() => {
      this.prismRef.nativeElement.innerHTML =
        'class Person {\n  constructor(name) {\n    this.name = name;\n  }\n  sayHello() {\n    console.log(`Hello, my name is ${this.name}`);\n  }\n}';
    });
  }
}
