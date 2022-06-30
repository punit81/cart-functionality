import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

   transform(value: number|string,code:string='INR' ,rates:any) {
    let price=Number(value);
   /* switch(code){
      case 'USD':
        return (price*=0.013);
      case 'EUR':
       return (price*=0.012);
       case 'GBP':
        return (price*=0.01);
       case 'CAD':
         return (price*=0.016);
      default:
        return price;
    }*/
    if(rates!=undefined){
      price=price*rates[code];
    }
    return price
  }
  
}
