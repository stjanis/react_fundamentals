import React from 'react';
import ReactDOM from 'react-dom';

// refs
// refs are a way to reference an instance of a component from within react application

// class component -- can have state
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red).value,
      green: ReactDOM.findDOMNode(this.refs.green).value,
      blue: ReactDOM.findDOMNode(this.refs.blue).value
    });
  }
  // in class component we will always have render method
  render() {
    return (
      <div>
        <Slider ref="red" update={ this.update } />
        { this.state.red }
        <br />
        <Slider ref="green" update={ this.update } />
        { this.state.green }
        <br />
        <Slider ref="blue" update={ this.update } />
        { this.state.blue }
        <br />
      </div>
    )
  }
}

// !! refs will not work with stateless components
class Slider extends React.Component {
  render() {
    return (
        <input type="range"
          min="0"
          max="255"
          onChange={ this.props.update } />
    )
  }
}

export default App
