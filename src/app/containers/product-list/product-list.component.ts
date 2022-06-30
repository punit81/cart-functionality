import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CartService } from 'src/app/services/cart.service';
@UntilDestroy()
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit ,OnDestroy{
  selected!:string;
  rates!:any;
  //currencysubs$!:Subscription;
  codes$!:Observable<string>;
  plist!:ProductType[];
  constructor(private productService:ProductService,private router:Router,private currencyService:CurrencyService,private authentication:AuthenticationService,private cartservice:CartService) {
    this.codes$=this.currencyService.currencyObservable;
   }

  async ngOnInit() {
    this.getData();
    //this.currencysubs$=this.currencyService.currencyObservable.subscribe((currency)=>{
      this.currencyService.currencyObservable.pipe(untilDestroyed(this)).subscribe((currency)=>{  
    this.selected=currency;
    });//no need to subscribe in case of async pipes until you want to do some additional
    //operations
    this.rates=await this.currencyService.fetchrates();
  }
  ngOnDestroy(): void {
   // this.currencysubs$.unsubscribe();
  }
  getData(){
    this.productService.getProducts().subscribe(
      (data)=>{
        console.log('success',data);
        //this.plist=data as ProductType[];
        this.plist=data;
      },
      (err)=>{
        console.log('error',err);
      }
    );
  }
  addItem(data :ProductType){
    console.log("Added to cart",data.productId+" "+data.productName);
    this.cartservice.addToCart(data);
   // this.router.navigate(['/cart'],{queryParams:{rating:2}});
  }
  gotocart(){
    this.router.navigate(['/cart']);
  }
}
