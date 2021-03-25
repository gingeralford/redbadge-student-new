// Create a class version of the Functional Component
import React, { Component } from 'react';
import { Button, Container } from "reactstrap";

class ClassClickCounter extends Component {
    constructor(props){
        super(props);
        this.state = { count: this.props.initialValue};
    }

    handleClick = () => {
        this.setState( {count: this.state.count - 1})
    }

    render(){
        return(
            <Container>
                <p>The total clicks left are {this.state.count}</p>
                <Button onClick={this.handleClick}> Click Me From Function</Button>
            </Container>
        )
    }
};

export default ClassClickCounter;