import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  constructor(private _interactionService: InteractionService) { } // 5.

  ngOnInit() {

    //5. we subscribe to the observable in the OnInit lifecycle hooks
    this._interactionService.teacherMessage$
      .subscribe(
        message => {
          if (message === 'Good Morning'){
              alert('Good morning teacher')
          } else if (message === 'Well Done'){
              alert('thank you teacher');
          }
      }
      )
  }

}
