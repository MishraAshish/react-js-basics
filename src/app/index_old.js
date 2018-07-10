console.log("This is how it wroks");
import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            homeLink:"Home",
            homeMounted: true
        }
    };
    onGreet(){
        alert("Hello");
    };
    changeLink(newLink){
        this.setState({
            homeLink : newLink
        })
    };
    onChangeHomeMounted(){
        this.setState({
            homeMounted : !this.state.homeMounted
        })
    }
    render(){
        var user = {
            age:25,
            hobbies:["PratapVihar","Cricker"]
        };      
        let homeCmp = "";
        if(this.state.homeMounted){
            homeCmp = (<Home 
                name={"Ashish"} 
                user={user}                             
                greet={this.onGreet}
                changeLink = {this.changeLink.bind(this)}
                initialLink = {this.state.homeLink}
                >
                <p>This is a child Component</p>
            </Home>);
        }  
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header headerLink={this.state.homeLink}/>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {homeCmp}                  
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <button onClick={this.onChangeHomeMounted.bind(this)} className="btn btn-primary">(Un) Mount Home</button>
                    </div>                    
                </div>
            </div>
        )
    }
}

render(<App/>, window.document.getElementById('app'));