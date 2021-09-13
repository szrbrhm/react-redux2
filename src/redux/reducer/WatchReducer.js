import { SELL_WATCH } from "../types/Types";

const initialState = {
  numberOfWatch: 300,
};

const watchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_WATCH:
      return {
        ...state,
        numberOfWatch: state.numberOfWatch - action.payload,
      };

    default:
      return state;
  }
};

export default watchReducer;
