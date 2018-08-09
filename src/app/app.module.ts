import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ContactPage } from '../pages/contact/contact';
import { ContactFormPage } from '../pages/contact-form/contact-form';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { WpApiProvider } from '../providers/wp-api/wp-api';
import { EmailComposer } from '../../node_modules/@ionic-native/email-composer';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage,
    ContactFormPage
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
    ContactFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WpApiProvider,
    EmailComposer,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WpApiProvider
  ]
})
export class AppModule {}
