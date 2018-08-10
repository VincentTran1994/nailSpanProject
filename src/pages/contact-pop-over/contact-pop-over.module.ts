import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPopOverPage } from './contact-pop-over';

@NgModule({
  declarations: [
    ContactPopOverPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPopOverPage),
  ],
})
export class ContactPopOverPageModule {}
