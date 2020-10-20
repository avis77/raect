import React from 'react';
import tinycolor from './tinycolor';
// import {useState} from 'react';

export default function colorblockdarken(prop) {

    return (
        <div id={prop.indx} style={{background: tinycolor(prop.color).darken(prop.lite).toString()}}>{prop.color}</div>
    )
}