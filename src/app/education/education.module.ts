import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { EducationListComponent } from './education-list/education-list.component';


@NgModule({
  declarations: [EducationListComponent],
  imports: [
    CommonModule,
    EducationRoutingModule
  ]
})
export class EducationModule { }
