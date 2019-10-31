import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';    // 4 two way binding
import { AppComponent } from './app.component';
import { TempalteDemoComponent } from './tempalte-demo/tempalte-demo.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { AppRoutingModule } from './app-routing.module';
import { Child2Component } from './parent-demo/child2/child2.component';
import { Child3Component } from './service-demo/child3/child3.component';
import { Child1Component } from './child-demo/child1/child1.component';
import { ChildDemoV2Component } from './child-demo-v2/child-demo-v2.component';
import { Childv2Component } from './child-demo-v2/childv2/childv2.component';
import { ChildDemoV3Component } from './child-demo-v3/child-demo-v3.component';
import { Childv3Component } from './child-demo-v3/childv3/childv3.component';

@NgModule({
  declarations: [
    AppComponent,
    TempalteDemoComponent,
    ChildDemoComponent,
    ParentDemoComponent,
    ServiceDemoComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    ChildDemoV2Component,
    Childv2Component,
    ChildDemoV3Component,
    Childv3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule           // 4 two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
