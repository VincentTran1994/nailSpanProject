import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { EmailComposer } from '../../../node_modules/@ionic-native/email-composer';

/**
 * Generated class for the ContactFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-form',
  templateUrl: 'contact-form.html',
})
export class ContactFormPage {
  public sender = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  };
  public check: string;

  constructor(public navCtrl: NavController,
    public emailComposer: EmailComposer,
    public platform: Platform,
    public toast: ToastController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ContactFormPage');
  }

  onSubmit() {
    // this.check = this.platform.;
    if (this.platform.is('android') || this.platform.is('ios')) {
      this.toast.create({
        message: "Sending...",
        duration: 5000
      }).present();

      let email = {
        to: 'vincenttran260@gmail.com',
        cc: 'trancongvuit@gmail.com',
        bcc: [this.sender.email],
        subject: this.sender.subject,
        body: this.sender.message,
        isHtml: true
      };
      this.emailComposer.open(email);
    }
    else {
      this.toast.create({
        message: "Cordova is not found in this device!",
        duration: 2500
      }).present();
    }

    this.navCtrl.pop();
  }
}
