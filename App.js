import React from 'react';

// unlike props which are meant to be passed in component as static values or methods
// state is a collection of values that is meant to be managed by component itself

// class component -- can have state
class App extends React.Component {
  // initialize state
  constructor() {
    // super gives a context for "this" within our component
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
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
        <input type="text" onChange={ this.update.bind(this) } />
        <h1>{ this.state.txt }</h1>
      </div>
    )
  }
}

export default App
