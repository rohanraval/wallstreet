import { CompanyDataActions } from "../actions/companydata.actions";
import * as fromCompanyData from "../actions/companydata.actions";

export interface State {
  ticker: string;
  companyName: string;
};

export const initialState: State = {
  ticker: '',
  companyName: ''
};

export function reducer(state = initialState, action: CompanyDataActions): State {
  switch (action.type) {
    case fromCompanyData.SET_TICKER: {
      return Object.assign({}, state, {
         ticker: action.payload
      });
    }
    case fromCompanyData.GET_COMPANY_NAME: {
      return Object.assign({}, state, {
         companyName: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

export const getTicker = (state: State) => state.ticker;
export const getCompanyName = (state: State) => state.companyName;