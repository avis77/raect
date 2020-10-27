import React from 'react';
// import {useState} from 'react';

export default function form1(prop) {

    return (
        <form>
            <p>user name: <input type={"text"} value={prop.data.name} onInput={prop.seter} name={"name"} key={"username"}/></p>
            <p>password: <input type={"password"} value={prop.data.password} onChange={prop.seter} name={"password"} key={"password"}/></p>
        </form>
    )
}