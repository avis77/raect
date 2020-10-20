import React from 'react';
// import {useState} from 'react';

export default function timeModule(prop) {

    return (
        <input type={"text"} value={prop.text/prop.divBy} onChange={prop.seter} />
    )
}