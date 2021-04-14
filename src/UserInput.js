import React, { useState } from 'react';
import validator from './validator.js';

//A function which waits before executing next line of code for {ms} milliseconds.
//The function returns a promise, which gets resolved after {ms} milliseconds.
//setTimeout calls the resolve method after waiting for {ms} milliseconds.
let wait = (ms) => (new Promise(resolve => { setTimeout(resolve, ms) }));

export function UserInput(props) {
    let [isValidating, setIsValidating] = useState(false);
    //updates the inputValue on change.
    function onChangeHandler(event) {
        props.handleInput(props.userInput.key, props.userInput.valid, event.target.value);
    }

    //handler for keypress event.
    //validates if the entered input is present in randomChars, is lexically meaningful and is not a duplicate of any previous inputs.
    async function onKeyPressHandler(event) {
        if (event.charCode === 13) {
            event.preventDefault();
            setIsValidating(true);
            await wait(200);
            let valid = validator(props.userInput.inputValue, props.randomChar, props.inputValueArr, props.userInput.key);
            setIsValidating(false);
            props.handleInput(props.userInput.key, valid, props.userInput.inputValue);
        }
    }

    return (
        <div className="flex justify-between h-10 mt-4 mx-4">
            <input type="text" className="border-black border-b-2 border-dashed w-1/3 h-full"
                value={props.userInput.inputValue}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                disabled={!(props.activeInput === props.userInput.key)}
            />
            <Signal inputLength={props.userInput.inputValue.length} isValidating={isValidating} valid={props.userInput.valid} />

        </div >

    )

}

// Returns JSX for the signal(circular element) to right of input
function Signal(props) {
    let defaultClasses = "h-full w-10 border-2 rounded-full flex items-center justify-center";
    let colorClass = "bg-red-500";
    //modifies bg-color to pulsating gray while input is being validated. Turns green if the entry is valid. Else defaulted to red.
    if (props.isValidating) {
        colorClass = "bg-gray-500 animate-pulse flex"
    }
    else if (props.valid) {
        colorClass = "bg-green-500"
    }
    else {
        colorClass = "bg-red-500"
    }
    let totalClass = defaultClasses + " " + colorClass;
    return (
        < div className={totalClass}> {!props.isValidating ? props.inputLength : ""}</div>
    )

}