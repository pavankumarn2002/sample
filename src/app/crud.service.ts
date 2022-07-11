import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Crud } from './crud';
import { tap, map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiURL = 'https://retoolapi.dev/FS6A8s'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/data')
      .pipe(
        catchError(this.errorHandler)
      )
  }



  token = "Some token";
  getToken() {
    return this.token;
  }
  create(post: Crud): Observable<any> {
    return this.httpClient.post(this.apiURL + '/data/',JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getElementById(id: any): Observable<any> {
    return this.httpClient.get(this.apiURL + '/data/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getContact(id: any) {
    return this.httpClient.get(this.apiURL + '/data/' + id)
  }
  update(id: number, post: Crud): Observable<any> {
    return this.httpClient.put(this.apiURL + '/data/' + id, JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  find(id: number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/data/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }
  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/data/' + id, this.httpOptions)
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
}
