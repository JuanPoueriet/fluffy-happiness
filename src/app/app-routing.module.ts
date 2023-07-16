import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ServicePageComponent } from './service/pages/service-page/service-page.component';
import { ProjectPageComponent } from './project/pages/project-page/project-page.component';
import { AboutUsPageComponent } from './about-us/pages/about-us-page/about-us-page.component';
import { ContactPageComponent } from './contact/pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    title: 'Home',
    component: HomePageComponent
  },
  {
    path: 'service',
    title: 'Service',
    component: ServicePageComponent
  },
  {
    path: 'project',
    title: 'Project',
    component: ProjectPageComponent
  },
  {
    path: 'about-us',
    title: 'About Us',
    component: AboutUsPageComponent
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
