import React, { Component } from 'react';

class StateExample extends Component {
    constructor(props) {
        super(props); //if you aren't assigning props you don't need the super, but doesn't hurt to have
        this.state = { currentTemp: "78", location: "Indiana"};
        // this.handleClick =  this.handleClick.bind(this);
    }
    //this is a METHOD not a function inside of classes
    // handleClick(){
    //     this.setState({currentTemp: "48"})
    // }

    handleClick = () => {
        this.setState({currentTemp: "60"})
    }
    
    render() {
        return (
            <div>The current temp is {this.state.currentTemp} in {this.state.location}
            <button onClick={this.handleClick}>Click me to Change Temp</button>
            </div>
        )
    }
}

export default StateExample;