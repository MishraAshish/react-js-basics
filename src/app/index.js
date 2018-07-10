import React from "react";
import { render } from "react-dom";
//import {  } from "react-router";
//import { HashRouter as Router, Route } from "react-router-dom";
import {
    HashRouter,
    Route,
    Link
  } from 'react-router-dom';

import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component{
    render(){
        return(
            <HashRouter>
            <div>
              <Route exact path="/" component={Home} />
              <Route path={"home"} Component={Home}></Route>
              <Route path={"user"} Component={User}></Route>
            </div>
         </HashRouter >            
        )
    }
}

render(<App/>, window.document.getElementById('app'));