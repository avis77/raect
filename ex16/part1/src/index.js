import React, {useState} from "react";
import ReactDOM from "react-dom";
import Gameboard from "./gameboard";
import Scoreboard from "./scoreboard";

const App = () => {
    const [score, setScore] = useState(0);
    const [number, setNumber] = useState(Math.floor(Math.random() * 10));

    function getNextNumber() {
        const nextNumber = Math.floor(Math.random() * 10);
        setNumber(nextNumber);
    }

    function checkNumber(indx) {
        let change = -5
        if (indx === number) {
            getNextNumber();
            change = 10
        }
        setScore(s => Math.max(0,s + change));
    }

    return (
        <div>
            <h1>ex 16 part 1</h1>

            <Gameboard number={number} checkF={checkNumber}/>
            <Scoreboard score={score} setScore={setScore} nextNumbaer={getNextNumber}/>
        </div>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);