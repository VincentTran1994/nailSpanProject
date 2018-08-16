import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { ContactFormPage } from '../pages/contact-form/contact-form';
import { ContactPopOverPage } from '../pages/contact-pop-over/contact-pop-over';
import { ServicePage } from '../pages/service/service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { WpApiProvider } from '../providers/wp-api/wp-api';
import { EmailComposer } from '../../node_modules/@ionic-native/email-composer';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '../../node_modules/@ionic-native/sms';
import { MoreDetailPage } from '../pages/more-detail/more-detail';
import { ServiceWpProvider } from '../providers/service-wp/service-wp';
import { Push } from '@ionic-native/push';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    ContactFormPage,
    ContactPopOverPage,
    ServicePage,
    MoreDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    ContactFormPage,
    ContactPopOverPage,
    ServicePage,
    MoreDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WpApiProvider,
    EmailComposer,
    CallNumber,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WpApiProvider,
    ServiceWpProvider,
    Push,
    InAppBrowser
  ]
})
export class AppModule {}
