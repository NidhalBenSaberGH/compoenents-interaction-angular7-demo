import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TempalteDemoComponent } from './tempalte-demo/tempalte-demo.component';
import { ChildDemoComponent } from './child-demo/child-demo.component';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { ChildDemoV2Component } from './child-demo-v2/child-demo-v2.component';
import { ChildDemoV3Component } from './child-demo-v3/child-demo-v3.component';

const appRoutes: Routes = [
  { path: '', component: TempalteDemoComponent },
  { path: 'childdemo', component: ChildDemoComponent },
  { path: 'childdemov2', component: ChildDemoV2Component },
  {path: 'childdemov3', component: ChildDemoV3Component},
  { path: 'parentdemo', component: ParentDemoComponent },
  { path: 'servicedemo', component: ServiceDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
