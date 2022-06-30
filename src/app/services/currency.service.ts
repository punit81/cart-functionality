import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private _code:string='INR';
  private currencySubject=new BehaviorSubject(this._code);
  api_key = 'vaZziC3MqsWllfWql4hl60r0UsjJKYHc';
  // to get the currency code should subscribe to this observable
  currencyObservable=this.currencySubject.asObservable();
  constructor(private _http: HttpClient) { }
  
  updateCurrency(code:string){
    this._code=code;
    //on every data change a notification needs to be provided
    this.currencySubject.next(this._code);
  }
  async fetchcodes(){
     const response=await fetch('https://api.apilayer.com/exchangerates_data/symbols?apikey=0CdRro1HlUqy5OVJksjZpVCXCy5vCBGx');
    const data = await response.json(); 
    //for actual uncomment above 2 lines and comment below line
    //const data = {symbols:{INR:"RUPPEE",USD:"US DOLLAR",CAD:"CANADIAN DOLLAR",JPY:"JAPANESE YEN",GBP:"POUND"}};
    return Object.keys(data.symbols);
  }
  async fetchrates(){
    const response=await fetch('https://api.apilayer.com/exchangerates_data/latest?apikey=0CdRro1HlUqy5OVJksjZpVCXCy5vCBGx&base=INR');
     const data = await response.json();
     //for actual uncomment above 2 lines and comment below line
     //const data ={rates:{INR:1,USD:0.013,CAD:0.016,JPY:1.72,GBP:0.010}};
     return data.rates;
   }

}
