import React, { Fragment } from 'react';
import Chart from './Chart';
import LiveTicker from './LiveTicker';

const Center = () => {
    return (
        <Fragment>
            <div className="">
            <Chart />
            <LiveTicker />
            </div>
            
        </Fragment>
    )
}

export default Center
