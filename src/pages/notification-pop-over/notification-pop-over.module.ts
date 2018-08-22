import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationPopOverPage } from './notification-pop-over';

@NgModule({
  declarations: [
    NotificationPopOverPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationPopOverPage),
  ],
})
export class NotificationPopOverPageModule {}
