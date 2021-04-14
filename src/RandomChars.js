import React from 'react';
//using map itrating each randomChar and giving each randomChar value to RandomElements function
export let RandomChars = (props) => {
    let firstFiveJSX = props.randomChar.map(x => (<RandomElements char={x} />))
    return (
        <div className=" w-full flex  flex-wrap justify-evenly">
            {firstFiveJSX}
        </div>

    )


}
//adding css for each randomChar
function RandomElements(props) {
    return (
        <div className="h-10 w-10 mx-4 my-4 border-2 border-red-500 rounded-full flex justify-center items-center">
            {props.char}
        </div>
    )
}