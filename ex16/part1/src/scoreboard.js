import React from 'react';
// import {useState} from 'react';

export default function scoreboard(prop) {

    function reset(){
        prop.nextNumbaer();
        prop.setScore(0);
    }
    return (
        <>
            <p>Score: {prop.score}</p>
            <button onClick={reset}>reset</button>
        </>
    )
}