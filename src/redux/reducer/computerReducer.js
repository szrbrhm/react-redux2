import { SELL_COMP} from "../types/Types";

const initialState = {
  numberOfComputers: 100,
};

const computerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_COMP:
      return {
        ...state,
        numberOfComputers: state.numberOfComputers - 1,
      };

    default:
      return state;
  }
};

export default computerReducer;
