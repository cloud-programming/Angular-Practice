import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponentComponent } from './landingpage-component/landingpage-component.component';


const routes: Routes = [
  {path:'',component:LandingpageComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingpageRoutingModule { }
