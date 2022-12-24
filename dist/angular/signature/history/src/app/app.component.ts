import { Component } from '@angular/core';
import '@htmlplus/core/center.js';
import '@htmlplus/core/signature.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  canUndo: boolean = false;
  canRedo: boolean = false;
  sync() {
    this.canUndo = window.signature2.canUndo();
    this.canRedo = window.signature2.canRedo();
  }
  onUndo() {
    window.signature2.undo();
    this.sync();
  }
  onRedo() {
    window.signature2.redo();
    this.sync();
  }
  onPlusEnd() {
    this.sync();
  }
}
