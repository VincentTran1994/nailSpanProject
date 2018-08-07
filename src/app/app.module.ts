import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { WpApiProvider } from '../providers/wp-api/wp-api';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContactPage
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
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WpApiProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WpApiProvider
  ]
})
export class AppModule {}
