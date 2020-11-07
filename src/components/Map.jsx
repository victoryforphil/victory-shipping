import React, { useState, useCallback, useEffect } from "react";
import { Card, Steps, Layout, Descriptions, Badge } from "antd";

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const { Header, Footer, Sider, Content } = Layout;
const { Step } = Steps;
const containerStyle = {
    width: '100%',
    height: '600px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
function Map(props){
  const [map, setMap] = React.useState(null);



  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log(props.location);
  const location = {lat: props.location.latitude, lng: props.location.longitude};
  return (
   
    <div>
      <LoadScript googleMapsApiKey="">

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={location}>

          </Marker>
        </GoogleMap>


      </LoadScript>
    </div>
  );
}

export default Map;
