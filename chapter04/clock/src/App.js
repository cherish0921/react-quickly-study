import React, { Component } from 'react';
import './App.css';

class App extends Component {
  /**
   * @description 设置初始化状态
   * @param {Object} props 
   */
  constructor(props){
    super(props);
    this.launchClock();
    this.state = {currentTime: (new Date().toLocaleString())};
    this.style = {color: 'blue'};
  }
  /**
   * @description 更新状态
   */
  launchClock(){
    setInterval(() => {
      this.setState({currentTime: new Date().toLocaleString()}, () => {
        // console.log(`updating time....`);
      });
    },1000)
  }
  render() {
    return (
      <div className="App" style={this.style}>
        {this.state.currentTime}
      </div>
    );
  }
}

export default App;
