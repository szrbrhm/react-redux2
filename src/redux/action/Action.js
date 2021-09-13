import { SELL_LAPTOP, SELL_COMPUTER, SELL_WATCH, SELL_PHONE } from "../types/types";

export const sellLaptop = () => {
    return{
        type: SELL_LAPTOP
    };
};

export const sellComputer = () => {
    return{
        type: SELL_COMPUTER
    };
};

export const sellPhone = () => {
    return{
        type: SELL_PHONE
    };
};

export const sellWatch = () => {
    return{
        type: SELL_WATCH
    };
};