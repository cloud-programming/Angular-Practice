import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdealJobRoutingModule } from './ideal-job-routing.module';
import { IdealJobListComponent } from './ideal-job-list/ideal-job-list.component';


@NgModule({
  declarations: [IdealJobListComponent],
  imports: [
    CommonModule,
    IdealJobRoutingModule
  ]
})
export class IdealJobModule { }
