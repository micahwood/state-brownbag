import { Injectable } from '@angular/core';
import {Subject,BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  private subject = new BehaviorSubject('orange');
  color$ = this.subject.asObservable();

  constructor() {}

  updateColor(color: string) {
    this.subject.next(color);
  }
}
