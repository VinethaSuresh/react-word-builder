import React from 'react';
export let RandomChars = (props) => {
    let firstFiveJSX = props.randomChar.map(x => (<RandomElements char={x} />))
    return (
        <div className=" w-full flex  flex-wrap justify-evenly">
            {firstFiveJSX}
        </div>

    )


}

function RandomElements(props) {
    return (
        <div className="h-10 w-10 mx-4 my-4 border-2 border-red-500 rounded-full flex justify-center items-center">
            {props.char}
        </div>
    )
}