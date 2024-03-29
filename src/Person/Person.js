import React from 'react';
import  './Person.css'

const person = (props)=>{
    return (
    <div className = "Person">
        <p onClick = {props.clickMe}>I am a {props.name} and my age is {props.age} years old</p>
        <p>{props.children}</p>
        <input type = 'text' onChange = {props.changed} value = {props.name}></input>
    </div>
    )
}

export default person;

