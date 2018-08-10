import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ContactFormPage } from '../contact-form/contact-form';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';

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
    public sms : SMS,
    public toast: ToastController) 
    {

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPopOverPage');
  }

  //phone call
  onCalling() {
    this.callNumber.callNumber('8329973345', true)
    .then(res => {
      this.toast.create({
      message: 'Launched dialer sucessful!',
      duration: 3000
    }).present();})
    .catch(err => {
      this.toast.create({
        message: 'Error:' + err,
        duration: 3000
      }).present();
    });
  }

  //text message
  onTexting(){
    //this will be replace...
    let content = "this is a test message"
    this.sms.send('8329973345', content)
     .then(res => {
       this.toast.create({
         message: "Message is sending successfully!",
         duration: 3000
       }).present();
     })
     .catch(err => {
       this.toast.create({
         message: "Error:" + err,
         duration: 3000
       }).present();
     });
  }
  //email
  onEmailing() {
    this.navCtrl.push(ContactFormPage);
  }


}
