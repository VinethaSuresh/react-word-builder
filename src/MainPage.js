import React, { useState } from 'react';
import { RandomChars } from "./RandomChars";
import { UserInput } from "./UserInput";
import { Redirect } from 'react-router-dom';

export function MainPage() {
    let [randomChar, setRandomChar] = useState(randomCharGen(10));
    let [success, setSuccess] = useState(false);

    let [booleanValues, setbooleanValues] = useState([
        { key: 0, valid: false },
        { key: 1, valid: false },
        { key: 2, valid: false },
        { key: 3, valid: false },
        { key: 4, valid: false },
    ]);
    function randomCharGen(alphabetLength) {
        let alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        let arr = [];
        for (let i = 0; i < alphabetLength; i++) {
            arr.push((alphabets[(Math.floor(Math.random() * alphabets.length))]).toUpperCase());
        }
        return arr;
    }
    function booleanUpdater(key, valid) {
        for (let bv of booleanValues) {
            if (bv.key === key) {
                bv.valid = valid;
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


    let userInputArr = booleanValues.map((booleanValue) => (<UserInput randomChar={randomChar} booleanValue={booleanValue} booleanUpdater={booleanUpdater} />));
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