import React, { Component } from 'react';

class StateEventhandleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Enter text here"
    };

    // Binding event handler methods
    this.handleuppclick = this.handleuppclick.bind(this);
    this.handleonChange = this.handleonChange.bind(this);
  }

  handleuppclick() {
    console.log("Uppercase was clicked");
    const newtext = this.state.text.toUpperCase();
    this.setState({ text: newtext });
  }

  handleonChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <>
        <h1>{this.props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="mytext" rows="3" value={this.state.text} onChange={this.handleonChange}></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={this.handleuppclick}>
          Convert to Uppercase
        </button>
      </>
    );
  }
}

export default StateEventhandleClass;