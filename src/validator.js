var checkWord = require('check-word');
const Word = checkWord('en');

function inputvalidator(word, randomChar) {
    if (word === "") {
        return false;
    }

    for (let i = 0; i < word.length; i++) {
        let matched = false;

        for (let j = 0; j < randomChar.length; j++) {
            if (word[i].toUpperCase() === randomChar[j]) {
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

function lexicator(word) {
    return Word.check(word);

}
export default function Validator(word, randomChar) {
    randomChar = randomChar.slice(0);
    return inputvalidator(word, randomChar) && lexicator(word);
}
