import { TickerActions } from "../actions/ticker.actions";
import { SET_TICKER } from "../actions/ticker.actions";

export interface State {
  ticker: string;
};

export const initialState: State = {
  ticker: ''
};

export function reducer(state = initialState, action: TickerActions): State {
  switch (action.type) {
    case SET_TICKER: {
      console.log(action.payload);
      return Object.assign({}, state, {
         ticker: action.payload
      });
    }

    default: {
      return state;
    }
  }
}

export const getTicker = (state: State) => state.ticker;
