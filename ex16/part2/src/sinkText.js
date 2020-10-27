import React from 'react';
// import {useState} from 'react';

export default function sinkText(prop) {

    return (
        <input type={"text"} value={prop.text} onChange={prop.seter} onInput={prop.seter}/>
    )
}