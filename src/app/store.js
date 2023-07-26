import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { coinApi } from "../features/api/coinApiSlice";
import { currencyApi } from "../features/api/CurrencyApiSlice";
import { marketDataApi } from "../features/api/marketDataApiSlice";
import currencyDropDownReducer from "../features/currencyDropDownSlice";
import cryptoCurrencyDropDownReducer from "../features/cryptoCurrencyDropDownSlice";
import timeReducer from "../features/timeSlice";
import exchangeCurrencyDropDownReducer from "../features/exchangeCurrenciesSlice";
import chartTypeSliceReducer from "../features/chartTypeSlice";

// Combine all reducers
const rootReducer = combineReducers({
  [coinApi.reducerPath]: coinApi.reducer,
  [currencyApi.reducerPath]: currencyApi.reducer,
  [marketDataApi.reducerPath]: marketDataApi.reducer,
  selectCurrency: currencyDropDownReducer,
  selectCryptoCurrency: cryptoCurrencyDropDownReducer,
  selectTime: timeReducer,
  exchangeCurrency: exchangeCurrencyDropDownReducer,
  selectChartType: chartTypeSliceReducer,
});

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(coinApi.middleware, currencyApi.middleware, marketDataApi.middleware),
});
