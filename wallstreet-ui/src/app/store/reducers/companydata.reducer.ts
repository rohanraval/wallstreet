import { CompanyDataActions } from "../actions/companydata.actions";
import * as fromCompanyData from "../actions/companydata.actions";

import * as _ from 'lodash';
import { Point } from '../models/point.model';
import { Line } from '../models/line.model';

export interface State {
  ticker: string;
  name: string;
  data: Line[];
};

export const initialState: State = {
  ticker: '',
  name: '',
  data: []
};

export function reducer(state = initialState, action: CompanyDataActions): State {
  switch (action.type) {
    case fromCompanyData.SET_TICKER: {
      return Object.assign({}, state, {
         ticker: action.payload
      });
    }
    case fromCompanyData.SET_COMPANY_NAME: {
      return Object.assign({}, state, {
         name: action.payload
      });
    }
    case fromCompanyData.SET_COMPANY_DATA: {
      let data = [].concat(state.data);
      _.each(action.payload, function(line) {
        data.push(line);
      })
      return Object.assign({}, state, {
         data: data
      });
    }

    default: {
      return state;
    }
  }
}

export const getTicker = (state: State) => state.ticker;
export const getCompanyName = (state: State) => state.name;
export const getCompanyData = (state: State) => state.data;