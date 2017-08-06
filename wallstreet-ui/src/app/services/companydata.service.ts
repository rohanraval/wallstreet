import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_BASE_URL } from './constants';
import { RequestBase } from './request-base';

import { Line } from '../store/models/line.model';
import { Point } from '../store/models/point.model';
import * as _ from 'lodash';

@Injectable()
export class CompanyDataService extends RequestBase {
  constructor(public http: Http) {
    super(http);
  }

  getCompanyName(ticker): Observable<string> {
    let url = `${API_BASE_URL}/${ticker}`;
    return this.http.get(url)
      .map(res => res.json())
      .catch(err => this.handleError(err));
  }

  getFinancialData(ticker, statement): Observable<Line[]> {
    let url = `${API_BASE_URL}/${ticker}/${statement}`;
    return this.http.get(url)
      .map(res => this.decorate(JSON.parse(res.json()), statement))
      .catch(err => this.handleError(err));
  }

  decorate(raw_data, statement:string): Line[] {
    let lines:Line[] = [];
    _.forIn(raw_data, function(data, metric) {
      let line:Line = new Line();
      line.metric = metric;
      line.statement = statement;
      let points:Point[] = [];
      _.forIn(data, function(value, year) {
        let point:Point = new Point();
        point.metric = metric;
        point.year = +year;
        point.value = value;
        points.push(point);
      })
      line.points = points;
      lines.push(line);
    })
    return lines;
  }

  handleError(error): Observable<any> {
    console.log("ERROR with status code: " + error.status);
    return Observable.throw(new Error(error));
  }
}
