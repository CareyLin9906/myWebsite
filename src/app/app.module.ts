import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';

const routes: Routes = [
  {path:'about', component: AboutPageComponent},
  {path:'projects', component: ProjectsPageComponent},
  {path: '', component: AboutPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ProjectsPageComponent,
    AboutPageComponent,
    ExperiencePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [LandingPageComponent, ProjectsPageComponent, AboutPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
