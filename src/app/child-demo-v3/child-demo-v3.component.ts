import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Childv3Component } from './childv3/childv3.component';

@Component({
  selector: 'app-child-demo-v3',
  templateUrl: './child-demo-v3.component.html',
  styleUrls: ['./child-demo-v3.component.css']
})
export class ChildDemoV3Component implements AfterViewInit  {
  
// A. I will create a property that hold a reference to the child component   B. I will add @ViewChild decorator with the Childv3Component as an argument
  @ViewChild(Childv3Component) childComponentRef: Childv3Component; 

  
  constructor(private cdRef:ChangeDetectorRef) { } //  // I add to remove the error Childv3Component.html:4 ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'null: '. Current value: 'null: message from parent component ...


  ngAfterViewInit(){   // C. we need to implement AfterViewInit interface as that were the child component Reference is available
     this.childComponentRef.message = 'message from parent component passed by Component Reference using  @ViewChild decorator';
  }

  ngAfterViewChecked()
{
  console.log( "! change of message value !" );
  this.cdRef.detectChanges();
}



  

}
