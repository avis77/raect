import React, {useState} from "react";
import ReactDOM from "react-dom";
import Cb from "./colorblockbriten";
import Cd from "./colorblockdarken";

const App = () => {
    const [color, setColor] = useState("red");

    function colorChanged(e) {
        const newValue = e.target.value;
        setColor(newValue);
    }
    const blocks = [1,2,3,4,5,6,7,8,9,10]
    const changeDelta = Math.floor(100/(blocks.length/2))
    const dirChangeAt = Math.floor(blocks.length/2)
    let change = 100
    return (
        <div>
            <h1>ex 11 part 6</h1>
            color: <input onInput={colorChanged} value={color}/>
            {blocks.map((value, index) => {
                if(index<dirChangeAt){
                    change -= changeDelta
                    return <Cd indx={index} color={color} lite={change}/>
                }else {
                    change += changeDelta
                    return <Cb indx={index} color={color} lite={change}/>
                }
            })}
        </div>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);