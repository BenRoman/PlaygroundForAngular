import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CommunicationBetweenCompService {

  ObservableCounter = Observable.create(observer => {
    let tmp = 0;
    setInterval(() => {
      tmp++;
      observer.next(tmp);
    }, 500);
  });

  messageDeliver = new EventEmitter<string>();

  logging() {
    console.log('method of service ');
  }

  constructor() { }

}
