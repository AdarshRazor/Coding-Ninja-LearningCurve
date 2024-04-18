import { useState } from 'react';
import React from 'react';
//import { Component } from 'react';

function Input(){

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");

    return(
        <>
        <div>
                <Row label="Name"> 
                    <input value={name} onChange={(e) => setName(e.target.value)}/>
                </Row>
                <Row label="Lastname">
                    <input value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                </Row>
            </div>
            <h2>Hello, {this.state.name + " " + this.state.lastname} </h2>
        </>
    )
}

export default Input;