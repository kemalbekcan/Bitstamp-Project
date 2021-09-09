import React, { useEffect, Fragment } from "react";
import { liveOrdersActions } from "./actions/live";
import { connect } from "react-redux";

const LiveOrders = ({ liveOrdersActions, liveOrders }) => {
  useEffect(() => {
    liveOrdersActions();
  }, [liveOrdersActions]);
  return (
    <Fragment>
      <div className="liveOrdersArea">
        <table className="liveOrdersTable">
          <thead>
            <tr>
              <th>Fiyat(USDT)</th>
              <th>Miktar(BTC)</th>
              <th>Saat</th>
            </tr>
          </thead>
          <tbody>
            {liveOrders &&
              liveOrders.map((sds, index) => (
                <tr key={index}>
                  {sds.order_type === 0 ? (
                    <td style={{ color: "green" }}>{sds.price}</td>
                  ) : (
                    <td style={{ color: "red" }}>{sds.price}</td>
                  )}
                  <td className="amount">{sds && sds.amount}</td>
                  <td className="dateTime">{sds && sds.datetime}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  liveOrders: state.live.liveOrders,
});

export default connect(mapStateToProps, { liveOrdersActions })(LiveOrders);
