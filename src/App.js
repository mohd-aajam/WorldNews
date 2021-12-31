import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import {BrowserRouter,Routes,Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
     <div>       
        <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route key="general" path="/" > <News pageSize={5} country="in" category="science" /></Route>          
          <Route key="general" path="/general"><News pageSize={5} country="in" category="general" /> </Route>          
          <Route key="business" path="/business"><News pageSize={5} country="in" category="business" /> </Route>          
          <Route key="entertainment" path="/entertainment"><News pageSize={5} country="in" category="entertainment" /> </Route>          
          <Route key="health" path="/health"><News pageSize={5} country="in" category="health" /> </Route>          
          <Route key="science" path="/science"><News pageSize={5} country="in" category="science" /> </Route>          
          <Route key="sports" path="/sports"><News pageSize={5} country="in" category="sports" /> </Route>          
          <Route key="technology" path="/technology"><News pageSize={5} country="in" category="technology" /> </Route> 
        </Routes>
       </BrowserRouter>      
     </div>
     </>
      
      
    );
  }
}
