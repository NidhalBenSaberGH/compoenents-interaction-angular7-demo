import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childv2',
  templateUrl: './childv2.component.html',
  styleUrls: ['./childv2.component.css']
})
export class Childv2Component implements OnInit {

  private _loggedIn: boolean; // 1
  message: string;  // 5

  get loggedIn(){
    return this._loggedIn; //2
  }

  @Input()   // 4
  set loggedIn(value: boolean){  // 3
    this._loggedIn = value;
    if(this._loggedIn === true){   // 6
      this.message = "Welcome Nidhal !!!";
    } else {
      this.message = "Please LogIn !!!";
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
