import React, {useState} from "react";
import ReactDOM from "react-dom";

const wordLIst = ["Abetalipoproteinemia", "Adrenocorticotrophic", "Adrenocorticotrophin", "Antiestablishmentism", "Buckminsterfullerene",
    "Compartmentalisation", "Compartmentalization", "Counter-demonstration", "Counter-revolutionist", "Counterdemonstration", "Counterrevolutionary", "Counterrevolutionist",
    "Destructive-metabolic", "Electrocardiographic", "Electroencephalogram", "Histoincompatibility"]

function WordListBox(filterWord) {

    function getWords(prop) {
        if (prop.filterWord.length === 0) {
            return wordLIst
        }
        return wordLIst.filter(w => w.toLowerCase().indexOf(prop.filterWord.toLowerCase()) !== -1)
    }

    return (
        <ul className="list-group">
            {getWords(filterWord).map(w => <li class="list-group-item list-group-item-primary">{w}</li>)
            }
        </ul>
    );
}

function FilterBox(prop){
    function setNewFilter(e){
        prop.setNewFilter(e.target.value)
    }

    return(
        <input type={"text"} value={prop.filterWord} onInput={setNewFilter}/>
    )
}
const App = () => {
    const [filterWord, setFilterWord] = useState("");
    return (
        <div>
            <h1>ex 11 part 2</h1>
            <FilterBox filterWord={filterWord} setNewFilter={setFilterWord}/>
            <WordListBox filterWord={filterWord}/>
        </div>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);