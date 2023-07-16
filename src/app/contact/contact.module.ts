import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';



@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactPageComponent
  ]
})
export class ContactModule { }
