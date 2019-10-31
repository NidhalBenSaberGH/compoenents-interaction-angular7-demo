import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  //1. create a private property represent the subject
  private _teacherMessageSource = new Subject<string>(); 

  //2. expose the subject as an observable 
  teacherMessage$ = this._teacherMessageSource.asObservable();

  //3. create a method  that accepts message from the teacher component and then push that message using observable 
  sendMessage(message:string){
    this._teacherMessageSource.next(message);
  }
  
  constructor() { }
}
