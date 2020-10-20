import React, {useState} from "react";
import ReactDOM from "react-dom";
import Tb from "./timeModule";

const App = () => {
    const [textb, setTextb] = useState("0");

    function timeChange(multyplyBy) {
        return (e) => {
            const newValue = Number(e.target.value * multyplyBy);
            setTextb(newValue);
        }
    }

    return (
        <div>
            <h1>ex 11 part 2</h1>
            sec: <Tb text={textb} seter={timeChange(1)} divBy={1}/>
            min: <Tb text={textb} seter={timeChange(60)} divBy={60}/>
            hur: <Tb text={textb} seter={timeChange(3600)} divBy={3600}/>
        </div>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);