import React, { Component } from 'react';

class AnalogDisplay extends Component {
    render() {
        return (
            <div>{this.props.time}</div>
        );
    }
}

export default AnalogDisplay;