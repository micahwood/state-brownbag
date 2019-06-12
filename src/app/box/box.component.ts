import { Component, OnInit } from '@angular/core';
import { BoxService } from './box.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  bgColor: string;

  constructor(public box: BoxService) {}

  ngOnInit() {
    this.bgColor = this.box.activeColor;
  }
}
