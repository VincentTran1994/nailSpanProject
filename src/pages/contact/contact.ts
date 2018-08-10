import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { PopoverController } from 'ionic-angular';
import { ContactPopOverPage } from '../contact-pop-over/contact-pop-over';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public popOver : PopoverController
              ) {
    
  }


  ionViewDidLoad() {
    // console.log('ionViewDidLoad ContactPage');
  }

  onSchedule(){
    this.navCtrl.push(ListPage);
  }

  onContact(){
    this.popOver.create(ContactPopOverPage).present({
      disableApp: true,
      direction: "bottom"
    });
  }

}
