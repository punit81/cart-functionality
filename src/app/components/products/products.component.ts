import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
//import { CurrencyService } from 'src/app/services/currency.service';
import { ProductType } from 'src/types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit ,OnChanges{

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes',changes);
  }
  //! suppress initialization
@Input() data!:ProductType;
@Input() currencyCode:string="INR";
@Input() rates:any;
@Output() btnClick=new EventEmitter();
constructor(/*private currencyservice:CurrencyService*/) { }
  ngOnInit(){
   /* this.currencyservice.currencyObservable.subscribe((currency)=>{
      this.currencyCode=currency;
    });*/
  }

notifyParent(){
  //emitting the event
  this.btnClick.emit(this.data);
}

discountCalculation()
{
  console.log("Discount Calculation logic..!");
  return "10% Off";
}
}
