import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public items = ['Monday','Tuesday', 'wednesday','Thursday','Friday','Saturday', 'Sunday'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClick(){
    this.navCtrl.pop();
  }
}
