import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class ProfileLink extends Component {
  render(){
    /**
     * TODO: 最佳模式
     * href={this.props.href}
     * 不必:href="{this.props.href}"
     * 不必href="${this.props.href}"
     */
    return (
      <a href={this.props.href} title={this.props.title}>{this.props.title}</a>
    )
  }
}

/**
 * @description {...this.props} 借助...扩展运算符将每一个属性递给子组件
 */
class FrameWork extends Component {
  render() {
    return (
      <h1 {...this.props}>Hello {this.props.frameworkName} World!</h1>
    )
  }
}

class App extends Component {
  render() {
    const dateTimenow = new Date().toLocaleString();
    return (
      <div className="App">
        <h1 className="helloworld">Hello World!</h1>
        <h1>Hello World!</h1>
        <span>Hello {this.props.userName}, Current date and time is {dateTimenow}.</span>
        <br></br>
        <ProfileLink href="https://www.baidu.com" title="百度"></ProfileLink>
        <br></br>
        <ul>
          <li react-is-awesome="true" id="320">React is awesome!</li>
        </ul>
        <FrameWork id="vue" title="vue" frameworkName="vue.js"></FrameWork>
        <FrameWork id="react" title="react" frameworkName="react.js"></FrameWork>
        <FrameWork id="angular" title="angular" frameworkName="angular.js"></FrameWork>
      </div>
    );
  }
}

export default App;
