import React, { Component } from 'react';
import AnalogDisplay from './analog-display';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {currentTime: (new Date().toLocaleString())};
    }
    render() {
        return (
            <div>
                <AnalogDisplay time={this.state.currentTime}></AnalogDisplay>
            </div>
        );
    }
}

export default App;