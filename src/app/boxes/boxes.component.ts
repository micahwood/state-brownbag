import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  bgColor: string;

  constructor() { }

  ngOnInit() {
  }

  update() {
    this.bgColor = 'red';
  }

}