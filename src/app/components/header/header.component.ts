import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authentication:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authentication.logout();
    this.router.navigate(['/login']);
  }
}
