import React from "react";
import { Card, Steps, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Step } = Steps;
function TrackingBar(props) {
  return (
    <div>
      
        <Steps current={1}>
          <Step
            title="Order Placed"
            description="You requested something and I kinda listened"
          />
          <Step title="Collecting Item" description="I'm getting the thing" />
          <Step
            title="On The Way"
            subTitle="ETA 5:41 PM"
            description="Car for vroom"
          />
          <Step
            title="Delivered"
            description="Im done i hope"
          />
        </Steps>
    </div>
  );
}

export default TrackingBar;
