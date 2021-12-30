import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {  BrowserRouter as Router,Routes,Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
     <div>
        <Router>
        <NavBar />
        <Routes>
       <Route path="/"> exact key="general" <News pageSize={5} country="in" category="general" apikey='cb478271397e498f9cce4f6f816f144f'/>
            </Route>          
         {/*  <Route exact key="general" path="/general"><News pageSize={5} country="in" category="general" apikey='cb478271397e498f9cce4f6f816f144f'/> </Route>          
          <Route exact key="business" path="/business"><News pageSize={5} country="in" category="business" apikey='cb478271397e498f9cce4f6f816f144f'/> </Route>          
          <Route exact key="entertainment" path="/entertainment"><News pageSize={5} country="in" category="entertainment" apikey='cb478271397e498f9cce4f6f816f144f'/> </Route>          
          <Route exact key="health" path="/health"><News pageSize={5} country="in" category="health" apikey='cb478271397e498f9cce4f6f816f144f'/> </Route>          
          <Route exact key="science" path="/science"><News pageSize={5} country="in" category="science" apikey='cb478271397e498f9cce4f6f816f144f'/> </Route>          
          <Route exact key="sports" path="/sports"><News pageSize={5} country="in" category="sports" apikey='cb478271397e498f9cce4f6f816f144f'/> </Route>          
          <Route exact key="technology" path="/technology"><News pageSize={5} country="in" category="technology" apikey='cb478271397e498f9cce4f6f816f144f'/> </Route>           */}
        </Routes>
       </Router>
     </div>
      
      
    );
  }
}
