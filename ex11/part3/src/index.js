import React, {useState} from "react";
import ReactDOM from "react-dom";
import Lablecheck from "./randomLabelCheck"

const App = () => {
    const [result,setResult] = useState("");

    return (
        <div>
            <h1>ex 11 part 3</h1>
            <Lablecheck resultPut={setResult} />
            <label>{result}</label>
        </div>
    )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
