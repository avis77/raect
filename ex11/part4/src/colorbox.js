import React from 'react';
// import {useState} from 'react';

export default function colorbox(prop) {

    return (
        <input type={"text"} value={prop.defaultColor} onChange={prop.toUpdate} />
    )
}