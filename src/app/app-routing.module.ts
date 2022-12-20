import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { EhealthComponent } from './projects/ehealth/ehealth.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:'', component: AboutPageComponent},
  {path:'projects', component: ProjectsPageComponent},
  {path:'about', component: AboutPageComponent},
  {path: 'experience',component: ExperiencePageComponent},
  {path:'projects/Ehealth', component:EhealthComponent}
]

@NgModule({
  declarations:[],
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingPageComponent, ProjectsPageComponent, AboutPageComponent, ExperiencePageComponent, EhealthComponent]