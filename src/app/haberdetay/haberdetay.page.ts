import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HaberapiService } from '../api/haberapi.service';
import {ActivatedRoute} from '@angular/router';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-haberdetay',
  templateUrl: './haberdetay.page.html',
  styleUrls: ['./haberdetay.page.scss'],
})
export class HaberdetayPage implements OnInit {
  article: any;
  url: any;
  constructor(private haberapi: HaberapiService,http:HttpClient, private router: ActivatedRoute,private webview: WebView) {
    //  this.router.queryParams.subscribe(params=>{
    //   this.url=params["urldata"];
    //   console.log("This url :" + this.url)
    //  })

     
    
    console.log(this.haberapi.currentArticle);
   }

  ngOnInit() {
    //ana sayfada çalıstırdım .
    this.article=this.haberapi.currentArticle;
    
    window.open(this.haberapi.currentArticle,'_self');
   //this.url=this.webview.convertFileSrc(this.haberapi.currentArticle)
    console.log("sdffdf  :  "+this.haberapi.currentArticle)
  }

}
