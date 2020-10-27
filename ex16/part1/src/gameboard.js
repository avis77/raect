import React from 'react';
// import {useState} from 'react';

export default function gameboard(prop) {


    function getColor(indx) {
        if (indx === prop.number) {
            return "red"
        } else {
            return "green"
        }
    }

    return (
        <table>
            <tbody>
            <tr>
                {[...Array(10)].fill(1).map((value, index) => (
                    <td key={index} style={{height: 30, width: 30, border: 5, background: getColor(index)}}
                        onClick={() => prop.checkF(index)}/>
                ))}
            </tr>
            </tbody>
        </table>

    )
}
