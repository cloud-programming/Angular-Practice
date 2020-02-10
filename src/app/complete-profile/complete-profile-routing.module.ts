import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompleteProfileComponentComponent } from './complete-profile-component/complete-profile-component.component';

const routes: Routes = [
  {path:'profile-complete',component:CompleteProfileComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompleteProfileRoutingModule { }
