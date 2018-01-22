import { combineReducers } from 'redux';
import * as actionTypes from "../actions/types";

const error = (state = false, action) => {
    switch (action.type) {
        case actionTypes.XR_FETCH_ERROR:
            return action.hasErrored;

        default:
            return state;
    }
}

const rates = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.XR_FETCH_SECCESS:
            return action.rates;

        default:
            return state;
    }
}

const rate = (state="USD", action) => {
  switch (action.type) {
    case actionTypes.UPDATE_XR:
      return action.rate;

    default:
        return state;
  }
}

export default combineReducers({
    rates,
    error,
    rate
})
