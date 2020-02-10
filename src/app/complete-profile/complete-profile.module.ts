import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompleteProfileRoutingModule } from './complete-profile-routing.module';
import { CompleteProfileComponentComponent } from './complete-profile-component/complete-profile-component.component';


@NgModule({
  declarations: [CompleteProfileComponentComponent],
  imports: [
    CommonModule,
    CompleteProfileRoutingModule
  ],
  exports: [
    CompleteProfileRoutingModule
  ]
})
export class CompleteProfileModule { }
