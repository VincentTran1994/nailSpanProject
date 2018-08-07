import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WpApiProvider } from '../../providers/wp-api/wp-api';
import { LoadingController } from 'ionic-angular';
import * as $ from 'jquery'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public slideData = [];
  public services = [];
  public galleries = [];
  $: any;


  constructor(public navCtrl: NavController,
              public wpAPI: WpApiProvider,
              public loadingCrtl: LoadingController) 
  {  
    this.loading();
    this.wpAPI.getSinglePage("25").subscribe(
      (res) => {
        let slider = $($.parseHTML(res['content']['rendered'])).find('div.m-fullsize');
        for( let i = 0; i< slider.length; i++){
          let tempUrl = $(slider[i]).css('background-image')
          tempUrl = tempUrl.replace('url(','').replace(')','').replace(/\"/gi, "");
          this.slideData.push(tempUrl);
        }
        // Service part
        let services = $($.parseHTML(res['content']['rendered'])).find('div.c-service');
        let images = services.find('img');
        let title = services.find('h3').children('a');
        let content = services.find('.service-description')

        for(let i = 0; i < images.length; i++){
          let service = {
            img : $(images[i]).attr('src'),
            title: $(title[i]).text(),
            content: $(content[i]).text()
          }
          this.services.push(service);
        }
        //Gallery part
        let gallery =  $($.parseHTML(res['content']['rendered'])).find('li.gallery-item');
        for(let i=0; i< gallery.length; i++){
          this.galleries.push($(gallery[i]).find('img').attr('src'));
        }
      });

    this.wpAPI.getDataFrom("/media?parent=25")
      .subscribe(
        res => {
          // console.log(res);

          // console.log(res[0]["guid"]);
        }
      );
  }

  loading(){
    const loader = this.loadingCrtl.create({
      content: "Please wait while Loading Contents...",
      duration: 500
    });
    loader.present();
  }
}
