import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tempalte-demo',
  templateUrl: './tempalte-demo.component.html',
  styleUrls: ['./tempalte-demo.component.css']
})
export class TempalteDemoComponent {

  pageTitle = 'Hello this is an Interpolation'; // 1 interpolation
  imgUrl = 'https://picsum.photos/200'; // 2 property binding
  count = 0;
  name: string;  // 4 two way binding
  
  incrementCounter() {  // 3 event Binding
    this.count += 1;
  }

}
