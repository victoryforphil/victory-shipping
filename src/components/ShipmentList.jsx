import React, { useState, useEffect } from "react";
import ShipmentItem from "./ShipmentItem"

function ShipmentList() {
  const [shipments, setShipments] = useState([]);
  const [subscribed, setSubscribed] = useState([]);

  useEffect(() => {
    
  });

  return (
    <div className="App">
      <ShipmentItem data={{
          name: "Test Shipment #1",
        destination: "2115 Supulevda Ave",
        client: "Brenda",
        current_location: {
            lat: 0,
            long: 0
        },
        current_state: "Processing",
        created_date: new Date(),
        updated_date: new Date(),
        processed_date: new Date(),
        delivery_date: new Date(),
        delivered_date: new Date(),
        arrival_date: new Date(),
      }}></ShipmentItem>
    </div>
  );
}

export default ShipmentList;
