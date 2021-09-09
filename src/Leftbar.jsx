import React, { Fragment, useState, useEffect } from "react";
import Bids from "./Bids";
import Asks from "./Asks";

const Leftbar = () => {
  const [orders, setOrders] = useState([]);
  const currencyPair = "btcusd";

  useEffect(() => {
    const subscribe = {
      event: "bts:subscribe",
      data: {
        channel: `order_book_${currencyPair}`,
      },
    };
    const ws = new WebSocket("wss://ws.bitstamp.net");

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };
    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      setOrders(response.data);
    };
    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, [currencyPair]);

  const { bids, asks } = orders;
  return (
    <Fragment>
      <Asks asks={asks} />
      <Bids bids={bids} />
    </Fragment>
  );
};

export default Leftbar;
