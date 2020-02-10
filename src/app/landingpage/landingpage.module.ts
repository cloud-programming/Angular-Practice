import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingpageRoutingModule } from './landingpage-routing.module';
import { LandingpageComponentComponent } from './landingpage-component/landingpage-component.component';


@NgModule({
  declarations: [LandingpageComponentComponent],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ],
  exports: [
    LandingpageComponentComponent
  ]
})
export class LandingpageModule { }
