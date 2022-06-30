import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginpageComponent } from '../components/loginpage/loginpage.component';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private auth:AuthenticationService){
  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    if(this.auth.validateUserTocken()){
      return true;
    }
    else{
      this.router.navigate(['/login'],{
        queryParams:{
          returnUrl:state.url
        }
      });
    }
    return false;
  }
  
}
