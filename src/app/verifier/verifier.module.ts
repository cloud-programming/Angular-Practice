import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifierRoutingModule } from './verifier-routing.module';
import { VerifierListComponent } from './verifier-list/verifier-list.component';
import { VerifierFeaturedComponent } from './verifier-featured/verifier-featured.component';


@NgModule({
  declarations: [VerifierListComponent, VerifierFeaturedComponent],
  imports: [
    CommonModule,
    VerifierRoutingModule
  ]
})
export class VerifierModule { }
