import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
const exchangeApi= environment.exchange_url;


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency:any;



  constructor(private http: HttpClient) { }

  //url oluşturma

  getMoney(url){
    return this.http.get(`${exchangeApi}${url}`)
  }
}
