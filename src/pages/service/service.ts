import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import * as $ from 'jquery';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { HtmlParser } from '../../../node_modules/@angular/compiler';


@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public wpAPI: WpApiProvider,
    public http: HttpClient
  ) {
    
    this.http.get('http://danang.1888demo.com/nails-ws003/services/',{responseType: 'text'})
    .subscribe(res=>{
      let dataSource = $('div.vc_inner',$.parseHTML(res));
      // console.log(dataSource);
      // let titles = $(dataSource[0]).find('h2').text;
      for(let i = 0; i < dataSource.length; i++){
        let titles = $(dataSource[i]).find('img.rounded').attr('src')
        // console.log(titles);
        let menuTitles = $(dataSource[i]).find('h3.accordion-title');
        console.log(menuTitles);
        let menuPrices = $(dataSource[i]).find('p.accordion-price');
        // console.log(menuPrices);
        let menuContents = $(dataSource[i]).find('div.accordion-content').children('p');
        // console.log(menuContents);
      }
      
    });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ServicePage');
  }

}
