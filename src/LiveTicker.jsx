import React, { useEffect, Fragment } from "react";
import { liveTradesAction } from "./actions/live";
import { connect } from "react-redux";

const LiveTicker = ({ liveTradesAction, liveTrades }) => {
  useEffect(() => {
    liveTradesAction();
  }, [liveTradesAction]);

  return (
    <Fragment>
      <div className="liveTickerArea">
        <table className="liveTickerTable">
          <thead>
            <tr>
              <th>Price</th>
              <th>Amount</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {liveTrades &&
              liveTrades.map((asd, index) => (
                <tr key={index}>
                  {asd.type === 0 ? (
                    <td style={{ color: "green" }}>{asd.price}</td>
                  ) : (
                    <td style={{ color: "red" }}>{asd.price}</td>
                  )}
                  <td className="amount">{asd && asd.amount}</td>
                  <td className="dateTime">{asd && asd.timestamp}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  liveTrades: state.live.liveTrades,
});

export default connect(mapStateToProps, { liveTradesAction })(LiveTicker);
