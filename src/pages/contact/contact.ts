import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { PopoverController } from 'ionic-angular';
import { ContactPopOverPage } from '../contact-pop-over/contact-pop-over';
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public popOver : PopoverController,
              private iab: InAppBrowser,
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

  reservation(){
    const options : InAppBrowserOptions = {
      zoom : 'no',
      hardwareback: 'no',
      mediaPlaybackRequiresUserAction: 'yes',
    }

    const browser = this.iab.create("http://danang.1888demo.com/nails-ws003/reservation-form/",'_self',options);
    
    browser.on('loadstop').subscribe(event => {
      browser.executeScript({
        code: "document.getElementsByClassName('header-inner')[0].style.display = 'none';"
      });
    });
  }
}
