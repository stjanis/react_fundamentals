import React from 'react';
import ReactDOM from 'react-dom';

// class component -- can have state
class App extends React.Component {
  // in class component we will always have render method
  render() {
    // accessing the props value
    let txt = this.props.txt;
    return (
      <div>
        <h1>{ txt }</h1>
        <p>This is required number: { this.props.cat }</p>
      </div>
    )
  }
}

// we can also define property types, that we are expecting
App.propTypes = {
  txt: React.PropTypes.string, // expecting this to be string
  cat: React.PropTypes.number.isRequired // expecting this to be manadatory integer
}

// define default properties
App.defaultProps = {
  txt: 'this is the default txt' // prop value defined in ReactDOM.render will override this
}

ReactDOM.render(
  // setting the props value
  // note: similar to setting attributes in html
  <App txt="this is the props value" cat={5} />,
  document.getElementById('app')
);
