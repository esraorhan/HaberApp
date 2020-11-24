import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


const API_URL=environment.API_Url;
const API_KEY =environment.API_Key



@Injectable({
  providedIn: 'root'
})
export class HaberapiService {

  currentArticle:any;
  constructor(private http: HttpClient) { }



//haber url olusturma 


getHaber(url){
  return this.http.get(`${API_URL}/${url}&apikey=${API_KEY}`)
}


}
