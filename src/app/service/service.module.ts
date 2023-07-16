import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePageComponent } from './pages/service-page/service-page.component';



@NgModule({
  declarations: [
    ServicePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ServicePageComponent
  ]
})
export class ServiceModule { }
