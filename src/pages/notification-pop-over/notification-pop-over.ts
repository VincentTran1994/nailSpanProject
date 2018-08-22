import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-notification-pop-over',
  templateUrl: 'notification-pop-over.html',
})
export class NotificationPopOverPage {

  public dataFromFirebase : any;

  constructor(public navCtrl: NavController, 
    public angularFireData: AngularFireDatabase,
    public navParams: NavParams) {

      this.getFireData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPopOverPage');
  }

  getFireData(){
    this.angularFireData.list('/notifications').valueChanges().subscribe(
      data => {
        this.dataFromFirebase = data;
        console.log(this.dataFromFirebase);
      }
    );
  }
}
