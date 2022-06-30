import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css',]
})
export class LoginpageComponent implements OnInit {
  public model:{username:string|null,pass:string|null};
  loginform=new FormGroup({
    username:new FormControl(null,[Validators.required,Validators.minLength(5)]),
    pass: new FormControl(null,[Validators.required,Validators.minLength(5)]),
    });
    returnUrl: string = '';
  constructor(private router:Router,private auth:AuthenticationService,private route:ActivatedRoute) {
    this.model={username:null,pass:null};
   }
  checkloginCredentials(){
    this.model.username=this.loginform.controls.username.value;
      this.model.pass=this.loginform.controls.pass.value;
    if(this.loginform.valid && this.auth.validateUserDetails(this.model))
    {
      console.log(`Login Successful !`);
      this.auth.setTocken();
     //this.router.navigate(['/products']);
     this.router.navigate([this.returnUrl]);
    }
    else
    console.log(`Invalid Credentials....!`);
  }
  ngOnInit(): void {
   if (this.auth.validateUserTocken()) {
      //update your logic accordingly
      //this will trigger while user clicks on back button, 
      //before naviagting to login page
      alert('You will be logged out');
  }
  this.auth.logout();
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'products';
  //this.route.navigate(['/login']);*/
  }

}
