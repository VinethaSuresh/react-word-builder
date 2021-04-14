import React, { useState } from 'react';
import { RandomChars } from "./RandomChars";
import { UserInput } from "./UserInput";
import { Redirect } from 'react-router-dom';
import { PreviousMap } from 'postcss';


export function MainPage(props) {
    // creating state for randomChar
    let [randomChar, setRandomChar] = useState(randomCharGen(8, 2));
    // creating state for userInputs
    let [userInputs, setuserInputs] = useState([
        { key: 0, valid: false, inputValue: "" },
        { key: 1, valid: false, inputValue: "" },
        { key: 2, valid: false, inputValue: "" },
        { key: 3, valid: false, inputValue: "" },
        { key: 4, valid: false, inputValue: "" },
    ]);
    // setting stste for activeInput
    let [activeInput, setActiveInput] = useState(0);

    // Generates 10 random characters. Two of them are vowels and others are consonants.
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

    //handler function to reset the random characters and user inputs on clicking the replay button
    function rePlayHandler() {
        setRandomChar(randomCharGen(8, 2));
        setuserInputs([
            { key: 0, valid: false, inputValue: "" },
            { key: 1, valid: false, inputValue: "" },
            { key: 2, valid: false, inputValue: "" },
            { key: 3, valid: false, inputValue: "" },
            { key: 4, valid: false, inputValue: "" },
        ])
        setActiveInput(0);
    }

    //updaate the inputValue and valid in the appropriate JSON object, which is found based on the key
    function handleInput(key, valid, inputValue) {
        for (let userInput of userInputs) {
            if (userInput.key === key) {
                userInput.valid = valid;
                userInput.inputValue = inputValue;
                if (userInput.valid) setActiveInput(activeInput + 1);
            }
            console.log("userInput", userInput);

        }
        setuserInputs([...userInputs]);

        // checking whether all userinputs.valid is true 
        let result = userInputs.every(bv => bv.valid);

        //if all the userinputs.valid is true , redirects to last page
        if (result) {
            props.setCurrentPage("last");
        }
    }

    let inputValueArr = userInputs.map(item => item.inputValue);


    let userInputArr = userInputs.map((userInput) => (<UserInput randomChar={randomChar} userInput={userInput}
        handleInput={handleInput} activeInput={activeInput} inputValueArr={inputValueArr} />));
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div>
                <img src="image/companyLogo.jpg" alt="companyLogo" className="h-32 w-32"></img>
            </div>
            <div className="w-full flex justify-between h-10 mb-6">
                <span className="text-3xl font-extrabold text-red-600 ml-5 mt-2">Give me Five</span>
                <span className="mr-5 h-full  border-red-600 rounded-full flex items-center w-10 justify-center border-2" onClick={rePlayHandler}>
                    <img src="image/replay.svg" className="h-2/3" />
                </span>
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
