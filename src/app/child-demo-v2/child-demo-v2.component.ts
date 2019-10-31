import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-demo-v2',
  templateUrl: './child-demo-v2.component.html',
  styleUrls: ['./child-demo-v2.component.css']
})
export class ChildDemoV2Component implements OnInit {

  userLoggedIn = false; // 7
  
  constructor() { }

  ngOnInit() {
  }

}
