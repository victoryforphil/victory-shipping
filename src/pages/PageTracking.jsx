import React, {useEffect, useState} from "react";
import TrackingBar from "../components/TrackingBar";
import OrderDetails from "../components/OrderDetails";
import Map from "../components/Map";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams
} from "react-router-dom";
import { Card, Steps, Layout } from "antd";

import Firebase from "../Firebase"

const { Header, Footer, Sider, Content } = Layout;
function PageTracking(props) {
  let { id } = useParams();
  const [back, setBack] = useState(false);
  
  const [shipment, setShipment] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(()=>{
    if(subscribed == false){
      Firebase.db.collection("shipments").doc(id)
      .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());
        setShipment(doc.data());
        setSubscribed(true);
    });
    }
  });

  if (back) {
    return <Redirect push to={`/`} />;
  }

  
  
  if(shipment){
    return (
      <div>
        <Content style={{ margin: 50 }}>
          <Card title={id}>
            <TrackingBar />
            <Map location={shipment.location} />
            <OrderDetails order={shipment}/>
  
  
          </Card>
        </Content>
      </div>
    );
  }else{
    return (
      <h1>loading...</h1>
    )
  }
}

export default PageTracking;
