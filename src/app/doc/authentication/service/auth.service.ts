import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  message: any;

  url = "https://api-generator.retool.com/iVwX9g"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  userData: any = {
    emailId: '',
    password: ''
  };
  tocken: Number = 0;
  tockenDetails: any;
  constructor(private httpClient: HttpClient) {
    this.getAll().subscribe(x => {
      this.userData = x;
    })
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.url + '/data')
  }
  create(post: any): Observable<any> {
    return this.httpClient.post(this.url + '/data/', JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
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
    }
    return false;

  }


  //it should be from backend
  validateUserDetails(user: any) {
    let finalVal = false
    console.log(this.userData.length)
    for (let y of this.userData) {
      if (user.userid == y.userid && user.password == y.password) {
        return true;
      }
      else {
        this.message = "Please check your userid and password";
      }
    }
    return finalVal;
  }
  logout() {
    localStorage.clear();
  }
}
