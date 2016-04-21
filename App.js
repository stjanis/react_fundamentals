import React from 'react';
import ReactDOM from 'react-dom';

// refs
// refs are a way to reference an instance of a component from within react application

// class component -- can have state
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      red: 128
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value
    });
  }
  // in class component we will always have render method
  render() {
    return (
      <div>
        <NumInput
          ref="red"
          min={ 0 }
          max={ 255 }
          step={ 1 }
          val={ +this.state.red } // + - converting to number
          label="Red"
          //type="number"
          update={ this.update } />
      </div>
    )
  }
}

// !! refs will not work with stateless components
class NumInput extends React.Component {
  render() {
    let label = this.props.label !== '' ?
      <label>{ this.props.label } - { this.props.val }</label> : ''
    return (
      <div>
        <input ref="inp"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={ this.props.update } />
        { label }
      </div>
    )
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default App
