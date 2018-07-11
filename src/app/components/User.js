import React from "react";
import {browserHistory} from "react-router";

export class User extends React.Component{   
    navigateHome(){
        browserHistory.push("/home")
    }

    render(){
        return(
                    <div>
                        <h3>This is a user page</h3>
                        <p>User ID : {this.props.params.id}</p>
                        <hr/>
                        <button onClick={this.navigateHome} className="btn btn-primary"> Go Home!</button>
                    </div>
        );
    }
}