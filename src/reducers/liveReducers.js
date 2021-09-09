import { LIVE_ORDERS_SUCCESS, LIVE_TRADES_SUCCESS } from "../actions/types";

const initialState = {
  loading: true,
  liveOrders: [],
  liveTrades: []
};

const liveReducers = (state = initialState, action) => {
  switch (action.type) {
    case LIVE_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        liveOrders: [...state.liveOrders, action.payload].slice(0, 30),
      };
    case LIVE_TRADES_SUCCESS:
      return {
        ...state,
        loading: false,
        liveTrades: [...state.liveTrades, action.payload],
      };
    default:
      return state;
  }
};

export default liveReducers;
