import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs/internal/Observable';
import { CartService } from 'src/app/services/cart.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductType } from 'src/types';
@UntilDestroy()
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems$!:Observable<{id:number,product:ProductType,quantity:number}[]>;
  cartitemslist!:{id:number,product:ProductType,quantity:number}[];
  selected!:string;
  rates!:any;
  //currencysubs$!:Subscription;
  codes$!:Observable<string>;
  total!:number;
  
  constructor(private cartservice:CartService,private currencyService:CurrencyService,private router:Router) { 
    this.cartitems$=this.cartservice.cartObservable;
  }
gettotal(){
  this.total=0;
  for (let i of this.cartitemslist){
    this.total+=i.product.productPrice*i.quantity;
  }
  return this.total;
}
  async ngOnInit(){
   this.cartservice.cartObservable.pipe(untilDestroyed(this)).subscribe((cartitems)=>{
      this.cartitemslist=cartitems;
    });
    this.currencyService.currencyObservable.pipe(untilDestroyed(this)).subscribe((currency)=>{  
      this.selected=currency;
      });
      this.rates=await this.currencyService.fetchrates();
    debugger;
  }
additem(data:ProductType){
  this.cartservice.addToCart(data);
}
removeall(){
  this.cartservice.removeall();
}
removefromcart(data:ProductType){
  this.cartservice.removefromcart(data);
}
}
