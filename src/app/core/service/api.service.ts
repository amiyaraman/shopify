import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': 'http://localhost:5000',
    }),
  };

  constructor(private http: HttpClient) {}

  private formatError(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    this.http.get(path, { params }).pipe(catchError(this.formatError)).subscribe(data=>{
      console.log(data);
      console.log(path)

    });
    return this.http.get(path, { params }).pipe(catchError(this.formatError));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http
      .put(path, JSON.stringify(body), this.httpOptions)
      .pipe(catchError(this.formatError));
  }

  post(path: string, body: Object = {}): Observable<any> {
    console.log('this is the body ' + body);
    return this.http
      .post(path, JSON.stringify(body), this.httpOptions)
      .pipe(catchError(this.formatError));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(path).pipe(catchError(this.formatError));
  }
}
