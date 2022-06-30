import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'',component:LoginpageComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginpageComponent},
  {path:'products',component:ProductListComponent,canActivate:[AuthGuard]},
  {path:'**',component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
