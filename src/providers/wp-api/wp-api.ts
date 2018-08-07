import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpApiProvider {

  constructor(public http: HttpClient) {
    
  }

  public BASE_WP_URL = "http://danang.1888demo.com/nails-ws003/wp-json/wp/v2";

  getDataFrom(url){
    return this.http.get(this.BASE_WP_URL + url);
  }

  getPosts(){
    return this.http.get(this.BASE_WP_URL + "/posts");
  }


  getPages(){
    return this.http.get(this.BASE_WP_URL + "/pages");
  }

  //getting single page
  getSinglePage(id: string){
    return this.http.get(this.BASE_WP_URL + "/pages/" + id);
  }
}
