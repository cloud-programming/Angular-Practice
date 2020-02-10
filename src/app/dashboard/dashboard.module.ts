import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { WorkExperienceComponent } from './dashboard/work-experience/work-experience.component';
import { SkillComponent } from './dashboard/skill/skill.component';
import { IdealJobComponent } from './dashboard/ideal-job/ideal-job.component';
import { EducationComponent } from './dashboard/education/education.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [WorkExperienceComponent, SkillComponent, IdealJobComponent, EducationComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    WorkExperienceComponent
  ]
})
export class DashboardModule { }
