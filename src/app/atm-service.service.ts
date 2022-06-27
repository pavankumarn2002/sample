import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AtmData } from './atm-data';
import { Subject,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AtmServiceService {
  private apiURL = 'https://api-generator.retool.com/10fGrt'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/data')
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
  create(post: AtmData): Observable<any> {
    return this.httpClient.post(this.apiURL + '/data/', JSON.stringify(post), this.httpOptions)
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
