import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError ,of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = 'https://retoolapi.dev/FS6A8s'

  /*------------------------------------------
  --------------------------------------------
  Http Header Options
  --------------------------------------------
  --------------------------------------------*/
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(private httpClient: HttpClient) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getAll(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/data')

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  token = "Some token";
  getToken() {
    return this.token;
  }
  create(post: Post): Observable<any> {
    const token = this.getToken();
    return token

      ? this.httpClient.post(this.apiURL + '/data/', JSON.stringify(post), this.httpOptions)
        .pipe(
          catchError(this.errorHandler)
        ): of(false);
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id: number): Observable<any> {

    return this.httpClient.get(this.apiURL + '/data/' + id)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  update(id: number, post: Post): Observable<any> {

    return this.httpClient.put(this.apiURL + '/data/' + id, JSON.stringify(post), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  delete(id: number) {
    return this.httpClient.delete(this.apiURL + '/data/' + id, this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  /** 
   * Write code on Method
   *
   * @return response()
   */
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
