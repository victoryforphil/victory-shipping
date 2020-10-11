import React, { useState, useEffect } from "react";

function ShipmentList() {
  const [shipments, setShipments] = useState([]);
  const [subscribed, setSubscribed] = useState([]);

  useEffect(() => {
    
  });

  return (
    <div className="App">
      <h1>test</h1> {shipments.toString()}
    </div>
  );
}

export default ShipmentList;
