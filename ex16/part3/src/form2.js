import React from 'react';
// import {useState} from 'react';

export default function form1(prop) {

    return (
        <>
            <p>cuntry: <input type={"text"} value={prop.data.cuntry} onInput={prop.seter} name={"cuntry"} key={"cuntry"}/></p>
            <p>city: <input type={"text"} value={prop.data.city} onChange={prop.seter} name={"city"} key={"city"}/></p>
        </>
    )
}