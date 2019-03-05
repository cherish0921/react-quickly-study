import React, { Component } from 'react';
import AnalogDisplay from './analog-display';
import DigitalDisplay from "./digital-display";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {currentTime: (new Date().toLocaleString())};
    }
    render() {
        return (
            <div>
                <AnalogDisplay time={this.state.currentTime}></AnalogDisplay>
                <DigitalDisplay time={this.state.currentTime}></DigitalDisplay>
            </div>
        );
    }
}

export default App;