import { SELL_PHONE} from "../types/Types";


const initialState = {
    numberOfPhone : 200,
}

const phoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELL_PHONE:
            return{
                ...state,
                numberOfPhone: state.numberOfPhone - action.payload,
            }
        
    
        default:
            return state;
    }

}

export default phoneReducer;