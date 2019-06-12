import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  id: number;
  
  constructor(private route: ActivatedRouteSnapshot) {}

  ngOnInit() {
    this.id = this.route.params.id;
  }
}
