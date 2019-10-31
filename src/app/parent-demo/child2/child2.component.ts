import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() greetEvent = new EventEmitter();  // 2
  name = "World !!!";   // 2
  
  constructor() { }

  ngOnInit() {
  }

  callParentGreet(){  // 4 I will emit  the event by calling the emit method  this.greetEvent.emit(this.name); 
    this.greetEvent.emit(this.name);
  }

}
