console.log("This is how it wroks");
import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            homeLink:"Home"
        }
    };
    onGreet(){
        alert("Hello");
    };
    changeLink(newLink){
        this.setState({
            homeLink : newLink
        })
    }
    render(){
        var user = {
            age:25,
            hobbies:["PratapVihar","Cricker"]
        };        
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header headerLink={this.state.homeLink}/>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            name={"Ashish"} 
                            user={user}                             
                            greet={this.onGreet}
                            changeLink = {this.changeLink.bind(this)}
                            initialLink = {this.state.homeLink}
                            >
                            <p>This is a child Component</p>
                        </Home>                        
                    </div>                    
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'));