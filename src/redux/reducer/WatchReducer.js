import { SELL_WATCH } from "../types/Types";

const initialState = {
  numberOfWatch: 100,
};

const watchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_WATCH:
      return {
        ...state,
        numberOfWatch: state.numberOfWatch - 1,
      };

    default:
      return state;
  }
};

export default watchReducer;
