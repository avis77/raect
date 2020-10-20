import React, {useState} from "react";
import ReactDOM from "react-dom";
import Tb from "./sinkText";

const App = () => {
    const [textb, setTextb] = useState("text123");
    function handleChangeText(e) {
        const newValue = e.target.value;
        setTextb(newValue);
    }

    return (
        <div>
            <h1>ex 11 part 1</h1>
            <Tb text={textb} seter={handleChangeText}/>
            <Tb text={textb} seter={handleChangeText}/>
            <Tb text={textb} seter={handleChangeText}/>
            <Tb text={textb} seter={handleChangeText}/>
        </div>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);