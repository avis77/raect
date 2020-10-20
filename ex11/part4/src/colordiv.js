import React from 'react';
// import {useState} from 'react';

export default function colorbox(prop) {

    return (
        <div style={{color : prop.color}} >{prop.color}</div>
    )
}