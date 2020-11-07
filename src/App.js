import React from 'react';
import logo from './logo.svg';


import './App.css';
import 'antd/dist/antd.css';
import { Button, PageHeader, Layout } from 'antd';
import PageTracking from './pages/PageTracking';
import PageShipmentList from './pages/PageShipmentList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

function App() {
  
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/track/:id">
            <PageTracking />
          </Route>
          <Route path="/">
            <PageShipmentList />
          </Route>

        </Switch>
      </Router>
      <Footer style={{ textAlign: 'center' }}>©2020 Created by Alex Carter (victoryforphil)</Footer>
    </div >
  );
}

export default App;
