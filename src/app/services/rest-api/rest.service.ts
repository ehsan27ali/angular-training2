import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestService {

  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'https://uhray-restapi.herokuapp.com/api/emma';
  }

  get(url: string) {
    return this.http
      .get(`${this.baseUrl}${url}`)
      .toPromise()
      .then(this.parseResponse);
  }

  post(url: string, data?: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' }),
          options = new RequestOptions({ headers: headers });

    return this.http
      .post(`${this.baseUrl}${url}`, data, options)
      .toPromise()
      .then(this.parseResponse);
  }

  put(url: string, data?: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' }),
          options = new RequestOptions({ headers: headers });

    return this.http
      .put(`${this.baseUrl}${url}`, data, options)
      .toPromise()
      .then(this.parseResponse);
  }


  delete(url: string, data?: any) {
    return this.http
      .delete(`${this.baseUrl}${url}`)
      .toPromise()
      .then(this.parseResponse);
  }

  private parseResponse(d) {
    try {
      d = JSON.parse(d._body);
      return d;
    } catch (e) {
      return null;
    }
  }

}
