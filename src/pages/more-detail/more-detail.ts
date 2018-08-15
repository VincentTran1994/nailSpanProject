import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoreDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-more-detail',
  templateUrl: 'more-detail.html',
})
export class MoreDetailPage {
  public menu : any;
  public img: any;
  public title: any;
  public content: any;
  public price: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.menu = this.navParams.data;
    this.img = this.navParams.data.img;
    this.title = this.navParams.data.title;
    this.content = this.navParams.data.content;
    this.price = this.navParams.data.price;
  }

}
