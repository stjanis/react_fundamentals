import React from 'react';

// class component -- can have state
class App extends React.Component {
  // in extension in react component we can do all sorts of things
  // but in class component we will always have render method
  render() {
    // render method is expected to return other elements or components
    // render method is allowed to return only single node
    // needs to be wrapped in parent container
    return (
      <div>
        <h1>Hello world!</h1>
        <h3>Some subheading</h3>
      </div>
    )

    // NOT WORKINg
    // return (
    //   <h1>Hello</h1>
    //   <b>something</b>
    // )
  }
}

// stateless function Component -- will not have state
// const App = () => <h1>Hello stateless</h1>

export default App;
