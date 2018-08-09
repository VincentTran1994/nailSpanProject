import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactFormPage } from '../contact-form/contact-form';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  
  sendingEmail(){
    this.navCtrl.push(ContactFormPage);
  }

}
