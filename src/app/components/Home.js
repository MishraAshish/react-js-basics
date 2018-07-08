import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age : props.user.age,
            status:0,
            homeLink:props.initialLink
        }
    }

    makeMeOlder(){
        this.setState({
            age : this.state.age + 3
        });      
    }

    changeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onHandleChange(event){
        this.setState(
        {
            homeLink:event.target.value
        });
    }

    render(){
        return(
            <div className="container">
                    <p>In a new Component</p>
                    <p>Your name is {this.props.name} </p>
                    <p>Your age is {this.state.age} </p>
                    <p>Your age is {this.state.status} </p>
                    <div>
                        <h4>Hobbies</h4>
                        <ul>
                            {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
                        </ul>                                     
                    </div>
                    <hr/>           
                    {this.props.children}
                    <hr/>
                    <button className="btn btn-primary" onClick={() => this.makeMeOlder()}>Click To Old</button>
                    <hr/>
                    <button className="btn btn-primary" onClick={this.props.greet}>Greet Me</button>
                    <hr/>
                    <input type="text" value={this.state.homeLink} 
                        onChange={(event) => this.onHandleChange(event)}/>
                    <button className="btn btn-primary" onClick={this.changeLink.bind(this)}>Change Link</button>
            </div>
        );
    }
}
Home.propTypes = {
    //name: React.PropTypes.string,
    //user: React.PropTypes.object 
    //https://www.youtube.com/watch?v=IK9k9hSuYeA&index=14&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS
    //UpTo : #13 :Two Way Binding Need to start #14
}