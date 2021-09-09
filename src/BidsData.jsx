import React from "react";
import { Fragment } from "react";

const BidsData = ({ bid }) => {
  return (
    <Fragment>
      <tr>
        <td className="price">{bid && bid[1]}</td>
        <td className="amount">{bid && bid[0]}</td>
      </tr>
    </Fragment>
  );
};

export default BidsData;
