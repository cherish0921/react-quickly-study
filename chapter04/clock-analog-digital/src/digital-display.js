import React, { Component } from 'react';

class DigitalDisplay extends Component {
    render() {
        return (
            <div>{this.props.time}</div>
        );
    }
}

export default DigitalDisplay;