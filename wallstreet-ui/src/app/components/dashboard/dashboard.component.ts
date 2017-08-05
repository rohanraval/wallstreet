import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { UserActions } from '../../user/user.actions';
import { User } from '../../user/user.model';
import * as fromRoot from '../../store/reducers/index';
import * as fromCompanyDataActions from '../../store/actions/companydata.actions';
import * as fromUserActions from '../../user/user.actions';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnDestroy, OnInit {
  destroyed$: Subject<any> = new Subject<any>();
  ticker$: Observable<string>;
  companyName$: Observable<string>;
  
  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.ticker$ = this.store.select(fromRoot.getTicker);
    this.companyName$ = this.store.select(fromRoot.getCompanyName);
  }

  ngOnDestroy() {
    this.destroyed$.next();
  }

  tickerChange(ticker) {
    this.store.dispatch( new fromCompanyDataActions.SetTickerAction(ticker) );
  }
}
