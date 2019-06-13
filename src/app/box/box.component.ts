import { Component, OnInit, Input } from '@angular/core';
import { BoxService } from './box.service';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() color: string;
  bgColor: Observable<string>;
  constructor(private box: BoxService) {
    this.bgColor = this.box.color$;
  }

  ngOnInit() {}
}
