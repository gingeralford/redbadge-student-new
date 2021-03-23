import React, { Component } from 'react';

class PropsMapping extends Component {
    render() {
        const visitedPlaces = () => this.props.visited.map((place) => <li>{place}</li>)
        return (
            <div>
                <h2>Places I have been</h2>
                <ul>
                {visitedPlaces()}
                </ul>
            </div>
        )
    }
}

export default PropsMapping;