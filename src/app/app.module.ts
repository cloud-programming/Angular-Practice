import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { LandingpageModule } from './landingpage/landingpage.module';
import { SignupModule } from './signup/signup.module';
import { CompleteProfileModule } from './complete-profile/complete-profile.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    LandingpageModule,
    SignupModule,
    CompleteProfileModule,
    DashboardModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
