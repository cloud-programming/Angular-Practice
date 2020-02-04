import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillListComponent } from './skill-list/skill-list.component';


@NgModule({
  declarations: [SkillListComponent],
  imports: [
    CommonModule,
    SkillRoutingModule
  ]
})
export class SkillModule { }
