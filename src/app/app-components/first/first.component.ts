import { Component, OnInit } from '@angular/core';
import { CommunicationBetweenCompService } from 'src/app/services/communication-between-comp.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  valueOfInout = 'placeholder';

  constructor(private service: CommunicationBetweenCompService) { }

  sendInfo() {
    this.service.messageDeliver.emit(this.valueOfInout);
  }
}
