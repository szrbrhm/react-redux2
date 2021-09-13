import { SELL_COMP} from "../types/Types";

const initialState = {
  numberOfComputers: 400,
};

const computerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELL_COMP:
      return {
        ...state,
        numberOfComputers: state.numberOfComputers - action.payload,
      };

    default:
      return state;
  }
};

export default computerReducer;
