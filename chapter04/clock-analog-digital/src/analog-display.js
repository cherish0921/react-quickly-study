import React, { Component } from 'react';

class AnalogDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {date: this.props.time};
    }
    render() {
        return (
            <div style={this.state.dialStyle}>
                <div>{this.state.date}</div>
            </div>
        );
    }
}

export default AnalogDisplay;