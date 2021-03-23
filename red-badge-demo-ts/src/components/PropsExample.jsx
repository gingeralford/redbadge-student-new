import React, { Component } from 'react';

class PropsExample extends Component {
    
    
    render() {
        const {name, business} = this.props;
        return <div>{name} is the founder of {business}</div>
    }
}

export default PropsExample;