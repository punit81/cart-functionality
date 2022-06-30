import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userData: Array<{username:string,pass:string}>;
  tocken: Number = 0;
  tockenDetails!:string|null;
  constructor() {
      this.userData = [{
          username: 'PUNIT', pass: 'Misys1234'
      }]
  }
  setTocken() {
    this.tocken = new Date().getTime();
    localStorage.setItem('tocken', JSON.stringify(this.tocken));
}
validateUserTocken() {
    this.tockenDetails = localStorage.getItem('tocken');
    //let _tocken = JSON.parse
    if (this.tockenDetails != null) {
        return true;
    } else {
        return false;
    }

}
validateUserDetails(user:{username:string|null,pass:string|null}) {
  let _userList = this.userData;
  for (var i = 0; i < _userList.length; i++) {
      if (user.username == _userList[i]['username'] && user.pass == _userList[i]['pass']) {
          return true;
      }
  }
  return false;
}
logout() {
  localStorage.clear();
}

}
