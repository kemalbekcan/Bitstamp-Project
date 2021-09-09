import React, { Fragment } from "react";
import BidsData from "./BidsData";

const Bids = ({ bids }) => {
  return (
    <Fragment>
      <table className="bids">
        <thead>
          <tr>
            <th>Fiyat</th>
            <th>Miktar</th>
          </tr>
        </thead>
        <tbody>
          {bids &&
            bids
              .sort((a, b) => a.bids > b.bids)
              .slice(0, 15)
              .map((bid, index) => <BidsData bid={bid} key={index} />)}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Bids;
