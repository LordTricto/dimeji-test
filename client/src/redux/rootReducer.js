import cartSlice from "./cart/cartSlice";
import { combineReducers } from "redux";
import currencySlice from "./currency/currencySlice";

const rootReducer = combineReducers({
	/* your app’s top-level reducers */
	cart: cartSlice,
	currency: currencySlice,
});

export default rootReducer;