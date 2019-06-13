import {Component} from '@angular/core';
import {BoxService} from '../box/box.service'

@Component({
  template: `<h1>Detail</h1>
  <button (click)="update()">Update</button>
  <app-box [color]="bgColor | async">new content</app-box>`
})
export class DetailComponent {
  bgColor: any;
  constructor(private box: BoxService) {
    this.bgColor = this.box.color$;
  }

  update() {
    this.box.updateColor('blue');
  }
}