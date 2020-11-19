import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../_models/users';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseUrl;
  product_key: string|number = Math.floor(Math.random() * Math.floor(999999));

  constructor(
    private http: HttpClient
  ) {}

  /**
   * API to login User
   * @param email email address or username
   * @param password password of user
   */
  login(email, password): Observable<User> {
    const data = {
        email,
        password
    }

    // request headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    const responseData = this.post(this.baseUrl + 'users/login', JSON.stringify(data), httpOptions);

    return responseData;
  }

  logout() {
    var token = localStorage.getItem('token');
    var gateway_passcode = btoa(this.product_key + "_" + token);
    
    // request headers
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+gateway_passcode,
        'key': this.product_key.toString()
      })
    }
    const responseData = this.get(this.baseUrl + 'users/logout', httpOptions);

    return responseData;
  }

  /**
   * POST Request
   * @param url API URL
   * @param jsonData JSON encoded Data
   * @param httpOptions HTTP Options
   */
  post(url, jsonData, httpOptions): Observable<any> {
    return this.http.post<any>(url, jsonData, httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl))
  }

  /**
   * PUT Request
   * @param url API URL
   * @param jsonData JSON encoded Data
   * @param httpOptions HTTP Options
   */
  put(url, jsonData, httpOptions): Observable<any> {
    return this.http.put<any>(url, jsonData, httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl))
  }

  
  /**
   * GET request
   * @param url API URL
   * @param httpOptions HTTP Options
   */
  get(url, httpOptions): Observable<any> {
    return this.http.get<any>(url, httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl))
  }

  
  /**
   * DELETE request
   * @param url API URL
   * @param httpOptions HTTP Options
   */
  delete(url, httpOptions): Observable<any> {
    return this.http.delete<any>(url, httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl))
  }

  errorHandl(error) {
    console.log(error);
    return throwError("Can not connect to service "+error);
  }
}