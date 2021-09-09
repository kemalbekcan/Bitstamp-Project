import React, { Fragment } from "react";
import AskData from "./AskData";

const Asks = ({ asks }) => {
  return (
    <Fragment>
      <table className="askTable">
        <thead>
          <tr>
            <th>Fiyat(USDT)</th>
            <th>Miktar(BTC)</th>
          </tr>
        </thead>
        <tbody>
          {asks &&
            asks
              .sort((a, b) => a.asks > b.asks)
              .slice(0, 15)
              .map((ask, index) => <AskData ask={ask} key={index} />)}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Asks;
