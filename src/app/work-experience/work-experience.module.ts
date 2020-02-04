import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkExperienceRoutingModule } from './work-experience-routing.module';
import { WorkExperienceListComponent } from './work-experience-list/work-experience-list.component';


@NgModule({
  declarations: [WorkExperienceListComponent],
  imports: [
    CommonModule,
    WorkExperienceRoutingModule
  ]
})
export class WorkExperienceModule { }
