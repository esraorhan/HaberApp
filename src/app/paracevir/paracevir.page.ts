import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import {CurrencyService} from '../api/currency.service'
@Component({
  selector: 'app-paracevir',
  templateUrl: './paracevir.page.html',
  styleUrls: ['./paracevir.page.scss'],
})
export class ParacevirPage implements OnInit {

 public  miktar : number=1;
para:any;
currencies:any;
selectcategory:any;
selectSecond:any;
esra:any;

total:any;
  constructor(private currencyApi:CurrencyService) { 
    window.onload = () => {
      this.selectcategory = this.money[0].moneyName;
      this.selectSecond =this.money[2].moneyName;
      
     };
   
  }

  ngOnInit() {
   this.getPara();
   this.getSecondMoney();
  }

  money: any[] = [
    {
      id: 1,
      moneyName: 'USD'
    },
    {
      id: 2,
      moneyName: 'EUR'
    },
    {
      id: 3,
      moneyName: 'TRY'
    },
    {
      id: 4,
      moneyName: 'CZK'
    },
    {
      id: 5,
      moneyName: 'DKK'
    },
    {
      id: 6,
      moneyName: 'GBP'
    },
    {
      id: 7,
      moneyName: 'HUF'
    },
    {
      id: 8,
      moneyName: 'PLN'
    }
   
  ];

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;



  getPara(){
    
    this.miktar;
    console.log(this.miktar);
       this.currencyApi.getMoney(this.selectcategory).subscribe(result=>{
         this.para=result;
         console.log("secilen  :" + JSON.stringify(this.para.rates));
        
         
       })
  }

  getSecondMoney(){
   
    this.currencyApi.getMoney(this.selectSecond).subscribe(result=>{
      this.esra=result;
      console.log("secilen ikinci secenek :" + JSON.stringify(this.esra.rates));
    })
  }

  getTotal(){
    const parity = this.para.rates[this.selectSecond];
    this.currencies = Number(this.miktar);
      this.total = parity * this.currencies ;
      console.log(this.total);
      
  }
}
