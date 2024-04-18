import React from 'react';
//import { Component } from 'react';

class Input extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            lastname: ""
        }
    }

    // events to listen to the change when the input changes
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleLastname = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }

    render() {
        return(
            <>
            <div>
                <Row label="Name"> 
                    <input value={this.state.name} onChange={this.handleName}/>
                </Row>
                <Row label="Lastname">
                    <input value={this.state.lastname} onChange={this.handleLastname}/>
                </Row>
            </div>
            <h2>Hello, {this.state.name + " " + this.state.lastname} </h2>
            </>
        )
    }
}