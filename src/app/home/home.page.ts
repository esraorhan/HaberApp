import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import {HaberapiService } from '../api/haberapi.service';
import { NavigationExtras } from '@angular/router'
import {NavController} from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  articles:any;
  article: any;
  haber:any;
  url:any;
  constructor(private haberapi: HaberapiService,private webview: WebView,
     private NavController:NavController,private router:Router, private http: HttpClient) {
       
      //this.haber=this.webview.convertFileSrc(haberapi.currentArticle.url);
      //console.log(this.webview.convertFileSrc(this.haberapi.currentArticle.url));
      
    this.getHabers();
    
  }


  getHabers(){
    this.haberapi.getHaber("top-headlines?country=tr").subscribe(data =>{
      this.articles=data['articles'];
    
      console.log(this.articles)

    })
  }

  goOnHaberDetay(article){
    
    // let navExtra: NavigationExtras = {
    //   queryParams : {
    //     urldata: article
    //   }   
    // }

    debugger;
   this.haberapi.currentArticle =article;
   this.article=this.haberapi.currentArticle; //url verdi.
   window.open(this.haberapi.currentArticle,'_self'); //uygulama içinde url gitti 
   
  console.log("sdffdf  :  "+this.haberapi.currentArticle)
   
   //this.NavController.navigateRoot("/haberdetay", navExtra)
  }


}
