import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { } //4. inject the service into the teacher component

  ngOnInit() {
  }

  //4.
  greetStudent(){
    this._interactionService.sendMessage('Good Morning');
  }
  appreciateStudent(){
    this._interactionService.sendMessage('Well Done');
  }

}
