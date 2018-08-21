import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { ServicePage } from '../pages/service/service';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { FcmProvider } from '../providers/fcm/fcm';
import { tap } from 'rxjs/operators';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              private push: Push, 
              public fcm: FcmProvider, 
              public toastCtrl: ToastController,
              public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Service', component: ServicePage },
      { title: 'Conatct', component: ContactPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
      //get a fcm token
      this.fcm.getToken()

      // Listen to incoming messages
      this.fcm.listenToNotifications().pipe(
        
        tap(msg => {
          console.log(msg);
          // show a toast
          const toast = this.toastCtrl.create({
            message: msg.body,
            duration: 3000
          });
          toast.present();
        })
      )
      .subscribe();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
