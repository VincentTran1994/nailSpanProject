import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import * as $ from 'jquery';
import { MoreDetailPage } from '../more-detail/more-detail';
import { ServiceWpProvider } from '../../providers/service-wp/service-wp';
import { HttpClient } from '../../../node_modules/@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
  public menus = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public wpAPI: WpApiProvider,
    public toast: ToastController,
    public serviceProvider: ServiceWpProvider,
    public http: HttpClient
  ) {
    
    this.serviceProvider.getData()
      .subscribe(res => {
        if(res){
          this.toast.create({
            message: "sucessfull getting data!",
            duration: 3000
          }).present();
        }
        let dataSource = $('div.vc_inner', $.parseHTML(res));
        let headers = $('h2', $.parseHTML(res));
        for (let i = 0; i < dataSource.length; i++) {
          let catogory = {
            header: "",
            details: []
          };
          catogory.header =  headers[i].innerHTML;
          let img = $(dataSource[i]).find('img.rounded').attr('src');
          let menuTitles = $(dataSource[i]).find('h3.accordion-title');
          let menuPrices = $(dataSource[i]).find('p.accordion-price');
          let menuContents = $(dataSource[i]).find('div.accordion-content').children('p');
          for (let j = 0; j < menuTitles.length; j++) {
            let detail = {
              img: img,
              title: menuTitles[j].innerHTML,
              price: menuPrices[j].innerHTML,
              content: menuContents[j].innerHTML
            }
            catogory.details.push(detail);
          }
          this.menus.push(catogory);

        }
        console.log(this.menus);
      });

    // this.http.get('http://danang.1888demo.com/nails-ws003/wp-json/wp/v2/pages/104')
    // .subscribe(res => {
    //   let dataSource = $.parseHTML(res['content']['rendered']);
    //   console.log($(dataSource).find('img.rounded'))
    //   console.log($(dataSource))
    // });
  }

  moreDetail(detail){
    this.navCtrl.push(MoreDetailPage,detail);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ServicePage');
  }

}
