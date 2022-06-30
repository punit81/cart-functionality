import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs/internal/Observable';
import { CurrencyService } from 'src/app/services/currency.service';
@UntilDestroy()
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
currencyCodes!:string[];
codes$!:Observable<string>;
rates!:any;
selected!:string;
//currencyCodes=this.currencyService.fetchcodes().;
 constructor(private currencyService:CurrencyService) {
  
   }

changeCurrency(event:Event){
 const ele= event.target as HTMLSelectElement;
 this.currencyService.updateCurrency(ele.value);

}
  async ngOnInit(){
    this.currencyCodes=await this.currencyService.fetchcodes();
    this.rates=await this.currencyService.fetchrates();
    this.currencyService.currencyObservable.pipe(untilDestroyed(this)).subscribe((currency)=>{  
      this.selected=currency;
      });
  }

}
