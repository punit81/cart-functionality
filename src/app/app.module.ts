import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginpageComponent } from './components/loginpage/loginpage.component'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { CurrencyComponent } from './components/currency/currency.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SortListPipe } from './pipes/sort-list.pipe';
import { FilterPipe } from './pipes/filter.pipe';
//import { HttpLoaderInterceptor } from './loader/http-loader.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ProductsComponent,
    ErrorpageComponent,
    ProductListComponent,
    ConversionPipe,
    CurrencyComponent,
    CartComponent,
    HeaderComponent,
    SortListPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
