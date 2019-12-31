import React, { Component } from "react";
import TimerDeal from "./shared/TimerDeal";
import DealProducts from "./shared/DealProducts";

class Home extends Component {
  render() {
    return <div>
      <TimerDeal />
      <DealProducts />
    </div>;
  }
}

export default Home;
