import React, { Fragment } from "react";
import Leftbar from "./Leftbar";
import Center from "./Center";
import Rightbar from "./Rightbar";

const App = () => {
  return (
    <Fragment>
      <div className="content">
        <div className="leftbar">
          <Leftbar />
        </div>

        <div className="center">
          <Center />
        </div>

        <Rightbar />
      </div>
    </Fragment>
  );
};

export default App;
