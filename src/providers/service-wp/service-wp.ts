import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServiceWpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceWpProvider {

  constructor(public http: HttpClient) {
    
  }

  getData(){
    return this.http.get('http://danang.1888demo.com/nails-ws003/services/',{responseType: 'text'});
  }

}
