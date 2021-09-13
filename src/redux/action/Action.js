import { SELL_LAPTOP, SELL_COMP, SELL_WATCH, SELL_PHONE } from "../types/Types"

export const sellLaptop = (number=1) => {
    return{
        type: SELL_LAPTOP,
        payload: number
    };
};

export const sellComputer = (number=1) => {
    return{
        type: SELL_COMP,
        payload: number,
    };
};

export const sellPhone = (number = 1) => {
    return{
        type: SELL_PHONE,
        payload: number,
    };
};

export const sellWatch = () => {
    return{
        type: SELL_WATCH
    };
};