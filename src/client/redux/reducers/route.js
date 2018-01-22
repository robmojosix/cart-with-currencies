import * as actionTypes from "../actions/types";

export const initialState = "shop";

const reducer = (state=initialState, action) => {
  if(action.type && action.type  === "CHANGE_ROUTE") {
    return action.route
  } else {
    return state
  }
};

export default reducer;
