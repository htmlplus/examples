import { Component } from '@angular/core';
import '@htmlplus/core/animation.js';
import '@htmlplus/core/avatar.js';
import { setConfig } from '@htmlplus/core/config.js';
setConfig({
  component: {
    'plus-animation': {
      asset: {
        name: {
          'custom-pulse': [
            {
              offset: 0,
              opacity: '0.6',
              transform: 'scale(1.0)'
            },
            {
              offset: 1,
              opacity: '0.0',
              transform: 'scale(1.5)'
            }
          ]
        }
      }
    }
  }
});
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
