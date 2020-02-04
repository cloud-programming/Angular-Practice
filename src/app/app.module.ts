import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { FooterComponent } from './footer/footer.component';
import { WorkExperienceListComponent } from './work-experience/work-experience-list/work-experience-list.component';
import { EducationListComponent } from './education/education-list/education-list.component';
import { SkillListComponent } from './skill/skill-list/skill-list.component';
import { IdealJobListComponent } from './ideal-job/ideal-job-list/ideal-job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileHeaderComponent,
    WorkExperienceListComponent,
    EducationListComponent,
    SkillListComponent,
    IdealJobListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
