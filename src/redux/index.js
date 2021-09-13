import { combineReducers, createStore } from "redux";
import computerReducer from "./reducer/computerReducer";
import laptopReducer from "./reducer/laptopReducer";
import phoneReducer from "./reducer/PhoneReducer";
import watchReducer from "./reducer/WatchReducer";

const rootReducer = combineReducers({
    laptop: laptopReducer,
    phone: phoneReducer,
    computer: computerReducer,
    watch: watchReducer
})

const store = createStore(rootReducer)

export default store;