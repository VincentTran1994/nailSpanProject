import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { ServicePage } from '../pages/service/service';
import { FcmProvider } from '../providers/fcm/fcm';
import { tap } from 'rxjs/operators';
import { ContactPopOverPage } from '../pages/contact-pop-over/contact-pop-over';
import { AngularFireDatabase } from 'angularfire2/database';
// import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    // public storage: Storage,
    public fcm: FcmProvider,
    public angularFireData: AngularFireDatabase,
    public alertControl: AlertController,
    public toats: ToastController,
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
      //notification
      this.fcmService();
      //welcome page showing control(show only one time)
      // this.welcomeShow();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  fcmService() {
    //get a fcm token
    this.fcm.getToken()

    // Listen to incoming messages
    if (this.platform.is('android') || this.platform.is('ios')) {
      this.fcm.listenToNotifications().pipe(
        tap(msg => {
          console.log(msg);
          this.angularFireData.list('/notifications').push({
            'msg': msg,
            'new': true
          });
          // show a toast
          const alert = this.alertControl.create({
            title: msg.title,
            message: msg.body,
            buttons: [
              {
                text: 'later',
                handler: () => {
                  this.toats.create({
                    message: "Tapping on the left top corner for more info!",
                    duration: 1500
                  }).present();
                }
              },
              {
                text: 'More info',
                handler: () => {
                  this.nav.push(ContactPopOverPage);
                }
              }
            ]
          });
          alert.present();
        })
      ).subscribe();
    }
    else {
      console.log("error: cordova is not support in this platform!")
    }
  }

  // welcomeShow(){
  //   this.storage.get('WelcomePage').then((result) => {

  //     if(result){
  //       this.rootPage = HomePage;
  //     }
  //     else{
  //       this.rootPage = WelcomePage;
  //       this.storage.set('WelcomePage', true);
  //     }
  //   });
  // }
}
