import { LIVE_ORDERS_SUCCESS, LIVE_TRADES_SUCCESS } from "./types";

export const liveOrdersActions = () => (dispatch) => {
  const currencyPair = "btcusd";
  const subscribe = {
    event: "bts:subscribe",
    data: {
      channel: `live_orders_${currencyPair}`,
    },
  };
  const ws = new WebSocket("wss://ws.bitstamp.net");

  ws.onopen = () => {
    ws.send(JSON.stringify(subscribe));
  };
  ws.onmessage = (event) => {
    const response = JSON.parse(event.data);
    dispatch({ type: LIVE_ORDERS_SUCCESS, payload: response.data });
  };
  ws.onclose = () => {
    ws.close();
  };

  return () => {
    ws.close();
  };
};

export const liveTradesAction = () => (dispatch) => {
  const currencyPair = "btcusd";
  const subscribe = {
    event: "bts:subscribe",
    data: {
      channel: `live_trades_${currencyPair}`,
    },
  };
  const ws = new WebSocket("wss://ws.bitstamp.net");

  ws.onopen = () => {
    ws.send(JSON.stringify(subscribe));
  };
  ws.onmessage = (event) => {
    const response = JSON.parse(event.data);
    dispatch({ type: LIVE_TRADES_SUCCESS, payload: response.data });
  };
  ws.onclose = () => {
    ws.close();
  };

  return () => {
    ws.close();
  };
};
