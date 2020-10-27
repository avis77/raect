import React from 'react';
// import {useState} from 'react';

export default function form1(prop) {

    return (
        <ul className="list-group">
            <li>name: {prop.data.name}</li>
            <li>psw: {prop.data.password}</li>
            <li>cuntry: {prop.data.cuntry}</li>
            <li>city: {prop.data.city}</li>
        </ul>
    )
}