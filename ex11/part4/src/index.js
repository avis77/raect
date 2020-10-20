import React, {useState} from "react";
import ReactDOM from "react-dom";
import Cb from "./colorbox";
import Cd from "./colordiv";

const App = () => {
    const [color, setColor] = useState("red");
    function handleChangeText(e) {
        const newValue = e.target.value;
        setColor(newValue);
    }

    return (
        <div>
            <h1>ex 11 part 4</h1>
            <Cb toUpdate={handleChangeText} defaultColor={color}/>
            <Cd color={color}/>
        </div>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);