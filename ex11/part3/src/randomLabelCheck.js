import React, {useState} from 'react';

export default function randomLabelCheck(prop) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [textb] = useState(Math.floor(Math.random() * 1000));
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const labaleTextMap = {
        0: "you are correct",
        1: "you are to high",
        2: "you are to low"
    }

    function check(e) {
        const newValue = Number(e.target.value);
        let r = 0;
        if (newValue > textb) {
            r = 1
        }
        if (newValue < textb) {
            r = 2
        }
        const lay = Math.random() > 0.99

        if (lay & r > 0) {
            r = r === 1 ? 2 : 1
        }
        prop.resultPut(labaleTextMap[r])
    }

    return (
        <div>
            <input type={"text"} onChange={check}/>
        </div>
    )
}