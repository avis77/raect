import React, {useState} from "react";
import ReactDOM from "react-dom";
import Form1 from "./form1";
import Form2 from "./form2";
import Form3 from "./form3";

const App = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({name: "", pasword: "", cuntry: "", city: ""})

    function nextStep(e) {
        if (step < 2) {
            setStep(s => s + 1)
        }
    }

    function prevStep(e) {
        if (step > 0) {
            setStep(s => s - 1)
        }
    }

    function handleChange(e) {
        const {name, value} = e.target
        setFormData(data => ({
            ...formData,
            [name]: value
        }));
    }

    function getForm(){
        switch (step) {
            case 0: return <Form1 data={formData} seter={handleChange}/>
            case 1: return <Form2 data={formData} seter={handleChange}/>
            case 2: return <Form3 data={formData} seter={handleChange}/>
            default: return <Form1 data={formData} seter={handleChange}/>
        }
    }
    function SubForm(prop) {
        return (
            <>
                step {step}
                {getForm()}
                <button value={"next"} onClick={nextStep}>next</button>
                <button value={"previos"} onClick={prevStep}>previous</button>
            </>
        )

    }

    return (
        <div>
            <h1>ex 16 part 3</h1>
            <SubForm/>
        </div>
    )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);