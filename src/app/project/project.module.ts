import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './pages/project-page/project-page.component';



@NgModule({
  declarations: [
    ProjectPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectPageComponent
  ]
})
export class ProjectModule { }
