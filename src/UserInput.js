import React, { useState } from 'react';
import validator from './validator.js';

export function UserInput(props) {
    let [inputValue, setInputValue] = useState("");
    function onChangeHandler(event) {
        setInputValue(event.target.value);
    }
    function onKeyPressHandler(event) {

        if (event.charCode === 13) {
            event.preventDefault();
            let valid = validator(inputValue, props.randomChar);
            props.booleanUpdater(props.booleanValue.key, valid);


        }

    }


    return (
        <div className="flex justify-between h-10 mt-4 mx-4">
            <input type="text" className="border-black border-b-2 border-dashed w-1/3 h-full"
                value={inputValue}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            < div className="h-full w-10 border-2 bg -red-500 rounded-full bg-red-600 flex items-center justify-center">{inputValue.length}</div>
        </div>

    )

}