import React from "react";
import { Card, Steps, Layout, Descriptions, Badge } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Step } = Steps;
function OrderDetails(props) {
  return (
    <div>
       <Descriptions title="Order Information" bordered>
            <Descriptions.Item label="Description">{props.order.description}</Descriptions.Item>
            <Descriptions.Item label="Client">{props.order.client}</Descriptions.Item>
            <Descriptions.Item label="Destination">{props.order.address}</Descriptions.Item>
        </Descriptions>
    </div>
  );
}

export default OrderDetails;
