import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_BASE_URL } from '../services/constants';
import { RequestBase } from '../services/request-base';

@Injectable()
export class CompanyDataService extends RequestBase {
  constructor(public http: Http) {
    super(http);
  }

  getCompanyName(ticker): Observable<string> {
    let url = `${API_BASE_URL}/${ticker}`;
    return this.http.get(url)
      .map(res => res.json())
      .catch( err => this.handleError(err));
  }

  handleError(error): any {
    console.log("ERROR with status code: " + error.status);
  }
}
