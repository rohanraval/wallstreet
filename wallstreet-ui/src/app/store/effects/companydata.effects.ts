/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { CompanyDataActions } from '../actions/companydata.actions';
import * as fromCompanyData from '../actions/companydata.actions';
import { AppState } from '../reducers';
import { CompanyDataService } from '../../services/companydata.service';

@Injectable()

export class CompanyDataEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private companyDataService: CompanyDataService,
    //private companyDataActions: CompanyDataActions
  ) { }

  @Effect() companyName$: Observable<Action> = this.actions$
    .ofType(fromCompanyData.SET_TICKER)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(q => {
      return this.companyDataService.getCompanyName(q)
        .map(result =>
          new fromCompanyData.SetCompanyNameAction(result)
        )
        .catch(() => Observable.of(new fromCompanyData.CompanyDataErrorAction()));
    });
  
  @Effect() companyISData$: Observable<Action> = this.actions$
    .ofType(fromCompanyData.SET_TICKER)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(q => {
      return this.companyDataService.getFinancialData(q, 'incomeStatement')
        .map(result =>
          new fromCompanyData.SetCompanyDataAction(result)
        )
        .catch(() => Observable.of(new fromCompanyData.CompanyDataErrorAction()));
    });

  @Effect() companyBSData$: Observable<Action> = this.actions$
    .ofType(fromCompanyData.SET_TICKER)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(q => {
      return this.companyDataService.getFinancialData(q, 'balanceSheet')
        .map(result =>
          new fromCompanyData.SetCompanyDataAction(result)
        )
        .catch(() => Observable.of(new fromCompanyData.CompanyDataErrorAction()));
    });

  @Effect() companyCFData$: Observable<Action> = this.actions$
    .ofType(fromCompanyData.SET_TICKER)
    .debounceTime(500)
    .map(toPayload)
    .switchMap(q => {
      return this.companyDataService.getFinancialData(q, 'cashFlow')
        .map(result =>
          new fromCompanyData.SetCompanyDataAction(result)
        )
        .catch(() => Observable.of(new fromCompanyData.CompanyDataErrorAction()));
    });

}
