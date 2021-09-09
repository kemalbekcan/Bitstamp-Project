import React, { Fragment } from 'react';
import TradingViewWidget from 'react-tradingview-widget';

const Chart = () => {
    return (
        <Fragment>
        <TradingViewWidget
        height="610"
        width="100%"
        symbol="BITSTAMP:BTCUSD"
        interval="15"
        timezone="Etc/UTC"
        theme="dark"
        toolbar_bg="#f1f3f6"
        withdateranges="true"
        hide_side_toolbar="false"
        allow_symbol_change="true"
        save_image="false"
        show_popup_button="true"
        popup_width="1000"
        popup_height="650"
        locale="tr"
  />
        </Fragment>
    )
}

export default Chart
