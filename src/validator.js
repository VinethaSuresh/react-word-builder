var checkWord = require('check-word');
const Word = checkWord('en');

//returns true if the word is present in randomChar
function inputvalidator(word, randomChar) {
    if (word === "") {
        return false; //if word is an empty string, returns false.
    }

    for (let i = 0; i < word.length; i++) {
        let matched = false;

        for (let j = 0; j < randomChar.length; j++) {
            if (word[i].toUpperCase() === randomChar[j]) {
                //removes the matched character from randomChar array so that it doesn't get matched again by a duplicate.
                //Eg: in the word "APPLE" there are two "P". So there should be two "P" characters in randomChar, for a valid match.
                //If we don't remove the character from randomChar after matching, then second "P" from APPLE will also get matched with a single "P" in randomChar
                randomChar.splice(j, 1);
                matched = true;
                break;
            }
        }

        if (!matched) {
            return false;
        }

    }
    return true;
}

//returns true if the current input is already entered by user.
function duplicateFinder(word, inputValueArr, currentKey) {
    console.log("word, inputValueArr, currentKey", word, inputValueArr, currentKey);

    for (let i = 0; i < inputValueArr.length; i++) {
        //exclude checking the current index while finding duplicates.
        //This is done because the current index is where the {word} is saved. So we should check only with other objects in array.
        if (currentKey != i && word === inputValueArr[i]) {
            return true;
        }

    }
    return false;
}


//Validating whether the user entered the valid (meaningful) word
function lexicator(word) {
    return Word.check(word);

}
//returns true if the word is present in randomChar, is meaningful and is not a duplicate.
export default function validator(word, randomChar, inputValueArr, currentKey) {
    randomChar = randomChar.slice(0);
    let validation = inputvalidator(word, randomChar);
    let lexication = lexicator(word);
    let duplication = duplicateFinder(word, inputValueArr, currentKey);
    if (duplication) {
        alert("Oops! Duplicate value");
    }
    return validation && lexication && !duplication

}
