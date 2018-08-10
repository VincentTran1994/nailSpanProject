import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactFormPage } from '../contact-form/contact-form';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-contact-pop-over',
  templateUrl: 'contact-pop-over.html',
})
export class ContactPopOverPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public callNumber: CallNumber,
    public toast: ToastController) 
    {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPopOverPage');
  }

  onCalling() {
    this.callNumber.callNumber('8329973345', true)
    .then(res => {
      this.toast.create({
      message: 'Launched dialer sucessful!',
      duration: 3000
    }).present();})
    .catch(err => {
      this.toast.create({
        message: 'Error launching dialer',
        duration: 3000
      }).present();
    });
  }

  onEmailing() {
    this.navCtrl.push(ContactFormPage);
  }


}
