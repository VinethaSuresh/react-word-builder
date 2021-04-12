import React, { useState } from 'react';
import validator from './validator.js';

let wait = (ms) => (new Promise(resolve => { setTimeout(resolve, ms) }));

export function UserInput(props) {
    let [inputValue, setInputValue] = useState("");
    let [isValidating, setIsValidating] = useState(false);
    function onChangeHandler(event) {
        setInputValue(event.target.value);
    }

    async function onKeyPressHandler(event) {
        if (event.charCode === 13) {
            event.preventDefault();
            setIsValidating(true);
            console.log("before validator");
            await wait(200);
            let valid = validator(inputValue, props.randomChar);
            console.log("after validator");
            setIsValidating(false);
            props.booleanUpdater(props.booleanValue.key, valid)

        }

    }


    return (
        <div className="flex justify-between h-10 mt-4 mx-4">
            <input type="text" className="border-black border-b-2 border-dashed w-1/3 h-full"
                value={inputValue}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                disabled={!(props.activeInput === props.booleanValue.key)}
            />
            <Signal inputLength={inputValue.length} isValidating={isValidating} valid={props.booleanValue.valid} />

        </div >

    )

}

function Signal(props) {
    let defaultClasses = "h-full w-10 border-2 rounded-full flex items-center justify-center";
    let colorClass = "bg-red-500";
    if (props.isValidating) {
        colorClass = "bg-blue-500"
    }
    else if (props.valid) {
        colorClass = "bg-green-500"

    }
    else {
        colorClass = "bg-red-500"
    }
    let totalClass = defaultClasses + " " + colorClass;
    return (
        < div className={totalClass}> {props.inputLength}</div>

    )

}