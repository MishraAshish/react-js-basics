import React from "react";

export class Home extends React.Component{
    render(){
        return(
            
                <div className="container">
                    <p>In a new Component</p>
                    <p>Your name is {this.props.name} </p>
                    <div>
                        <h4>Hobbies</h4>
                        <ul>
                            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>                                     
                    </div>
                    <hr/>           
                    {this.props.children}
                </div>
            
        );
    }
}
Home.propTypes = {
    //name: React.PropTypes.string,
    //user: React.PropTypes.object 
}