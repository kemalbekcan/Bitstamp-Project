import React from "react";
import { Fragment } from "react";

const AskData = ({ ask }) => {
  return (
    <Fragment>
      <tr>
        <td className="price"> {ask[0]} </td>
        <td className="amount"> {ask[1]} </td>
      </tr>
    </Fragment>
  );
};

export default AskData;
