import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/index';
import * as fromCompanyDataActions from '../../store/actions/companydata.actions';
import * as fromVisualizationsActions from '../../store/actions/visualizations.actions';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnDestroy, OnInit {
  destroyed$: Subject<any> = new Subject<any>();
  ticker$: Observable<string>;
  companyName: string;  
  years:number[];
  growthMetrics: string[];
  expenseMetrics: string[];
  assetsMetrics: string[];
  liabilitiesMetrics: string[];
  
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.ticker$ = this.store.select(fromRoot.getTicker);
    this.store.select(fromRoot.getCompanyName).subscribe(n => this.companyName = n);
    this.store.select(fromRoot.getCompanyData).subscribe(lines => {
      if(lines.length > 0) {
        this.years = lines[0].points.map(p => p.year);
      }
    });
    this.growthMetrics = ['Revenue', 'Gross Profit', 'EBITDA', 'Net Income'];
    this.expenseMetrics = ['COGS', 'SG&A', 'R&D', 'Other Operating Expenses', 'Interest Expense'];
    this.assetsMetrics = ['Total Cash', 'Accts Receivable', 'Inventories', 'Property, Plant, Equipment (net)', 'Intangible Assets'];
    this.liabilitiesMetrics = ['Total Cash', 'Inventories', 'Total Current Assets', 'Total Current Liabilities'];
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  tickerChange(ticker) {
    this.store.dispatch( new fromCompanyDataActions.SetTickerAction(ticker) );
  }

  changeYear(year) {
    this.store.dispatch(new fromVisualizationsActions.SetYearAction(year));
  }
}
