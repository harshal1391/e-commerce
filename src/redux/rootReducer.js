import { cartReducer } from "./cartReducer";

import {combineReducers} from "redux";

const rootReducer = combineReducers ({
    cartReducer : cartReducer,
});

export default rootReducer;