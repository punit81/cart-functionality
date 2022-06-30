import { HttpClient } from '@angular/common/http';
import { Injectable, IterableDiffers, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProductType } from 'src/types';
@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  constructor(private _http: HttpClient) { 
   
  }
  cartitems:{id:number,product:ProductType,quantity:number}[]=JSON.parse(localStorage.getItem('cartitems')!) as {id:number,product:ProductType,quantity:number}[]||[];
  private cartSubject=new BehaviorSubject(this.cartitems);
  cartObservable=this.cartSubject.asObservable();

  addToCart(data:ProductType){
    var items=JSON.parse(localStorage.getItem('cartitems')!) as {id:number,product:ProductType,quantity:number}[] ;
    this.cartitems=items||[];
    var flag=false;
    for (let it of this.cartitems){
        if(it.id===data.productId){
          it.quantity+=1;
          flag=true;
          break;
        }
    }
    if(!flag){
    var item={id:data.productId,product:data,quantity:1};
    this.cartitems.push(item);
    }
    localStorage.setItem('cartitems', JSON.stringify(this.cartitems))
  this.cartSubject.next(this.cartitems);
  }
  removefromcart(data:ProductType){
    var items=JSON.parse(localStorage.getItem('cartitems')!) as {id:number,product:ProductType,quantity:number}[] ;
    this.cartitems=items||[];
    var index=-1;
    for (let it of this.cartitems){
        if(it.id===data.productId){
          it.quantity-=1;
          if(it.quantity===0)
          index=this.cartitems.indexOf(it);
          break;
        }
    }
    if(index!=-1)
    this.cartitems.splice(index,1);
    localStorage.setItem('cartitems', JSON.stringify(this.cartitems))
  this.cartSubject.next(this.cartitems);
  }
  removeall(){
    this.cartitems=[];
    localStorage.removeItem('cartitems');
    this.cartSubject.next(this.cartitems);
  }
  ngOnInit(): void {
  }
}
