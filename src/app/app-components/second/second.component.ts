import { Component, OnInit } from '@angular/core';
import { CommunicationBetweenCompService } from 'src/app/services/communication-between-comp.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  valueForDisplaying = 'empty value';
  countersubscriber: Subscription;

  constructor(private communicator: CommunicationBetweenCompService) { }

  ngOnInit() {
    this.communicator.messageDeliver.subscribe(
      (value: string) => this.valueForDisplaying = value
    );

    this.countersubscriber = this.communicator.ObservableCounter.subscribe(data =>
      console.log(data)
    );
  }

  unsubscribe(){
    this.countersubscriber.unsubscribe();
  }

  subscribe(){
    this.countersubscriber = this.communicator.ObservableCounter.subscribe(data =>
      console.log(data)
    );
  }
}
