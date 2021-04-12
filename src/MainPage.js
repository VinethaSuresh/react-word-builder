import React, { useState } from 'react';
import { RandomChars } from "./RandomChars";
import { UserInput } from "./UserInput";
import { Redirect } from 'react-router-dom';

export function MainPage() {
    let [randomChar, setRandomChar] = useState(randomCharGen(8, 2));
    let [success, setSuccess] = useState(false);

    let [booleanValues, setbooleanValues] = useState([
        { key: 0, valid: false },
        { key: 1, valid: false },
        { key: 2, valid: false },
        { key: 3, valid: false },
        { key: 4, valid: false },
    ]);

    let [activeInput, setActiveInput] = useState(0);

    function randomCharGen(consonantLength, vowelLength) {
        let consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
        let vowel = ["a", "e", "i", "o", "u"];
        let arr = [];
        for (let i = 0; i < consonantLength; i++) {
            arr.push((consonant[(Math.floor(Math.random() * consonant.length))]).toUpperCase());
        }
        for (let i = 0; i < vowelLength; i++) {
            arr.push((vowel[(Math.floor(Math.random() * vowel.length))]).toUpperCase());
        }


        return arr;
    }
    function booleanUpdater(key, valid) {
        for (let bv of booleanValues) {
            if (bv.key === key) {
                bv.valid = valid;
            }
            if (bv.key === key && bv.valid) {
                setActiveInput(activeInput + 1);
                console.log("activeInput", activeInput);
            }
        }
        setbooleanValues([...booleanValues]);

        let result = booleanValues.every(bv => bv.valid);
        if (result) {
            setSuccess(true);
        }
    }

    if (success) {
        return <Redirect to="/last" />;
    }


    let userInputArr = booleanValues.map((booleanValue) => (<UserInput randomChar={randomChar} booleanValue={booleanValue} booleanUpdater={booleanUpdater} activeInput={activeInput} />));
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div>
                <img src="image/companyLogo.jpg" alt="companyLogo" className="h-32 w-32"></img>
            </div>
            <div className="w-full">
                <span className="text-3xl font-extrabold text-red-600 ml-5">Give me Five</span>
            </div>
            <div className="w-full h-2 bg-red-300 mx-4">
                <div className="w-3/4 h-full bg-red-600"></div>
            </div>
            <div className=" w-full">
                <RandomChars randomChar={randomChar} />
            </div>
            <div className="w-full">
                {userInputArr}
            </div>
        </div>
    )
}