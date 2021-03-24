//Create a class component based on the functionalProps.jsx file
//Keep the usage of destructuring props in this challenge.
import React, { Component } from 'react';
import { Alert, Container } from "reactstrap";

class ClassComponentProps extends Component {
    render() {
        const { numbers } = this.props;
        function displayAlerts() {
            return numbers.map((num, index) => (
              <Alert key={index} color={num % 2 === 0 ? "success" : "danger"}>
                The number is {num}{" "}
              </Alert>
            ));
          }

        return (
            <Container>
                <h3>From the Function Component</h3>
                {displayAlerts()}
            </Container>

            
        )
    }
}

export default ClassComponentProps;