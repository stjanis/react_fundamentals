import React from 'react';

// unlike props which are meant to be passed in component as static values or methods
// state is a collection of values that is meant to be managed by component itself

// when one component renders another component this is what reacts refers to as
// owner - ownee relationship, where parent component is also called a composit component

// class component -- can have state
class App extends React.Component {
  // initialize state
  constructor() {
    // super gives a context for "this" within our component
    super();
    this.state = {
      txt: ''
    }
    this.update = this.update.bind(this)
  }
  // to manage state
  update(e) {
    //setState methods sets new state
    this.setState({ txt: e.target.value });
  }
  // in class component we will always have render method
  render() {
    // input: triggering update on state
    // h1: accessing the state value
    return (
      <div>
        <Widget txt={ this.state.txt } update={ this.update } />
        <Widget txt={ this.state.txt } update={ this.update } />
        <Widget txt={ this.state.txt } update={ this.update } />
        <Widget txt={ this.state.txt } update={ this.update } />
      </div>
    )
  }
}

// create a new component based on App component
// this will be stateless component
const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={ props.update } />
      <h1>{ props.txt }</h1>
    </div>
  )
}

export default App
