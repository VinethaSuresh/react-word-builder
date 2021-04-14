import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export function LastPage(props) {
    // doing styleing using tailwind CSS and returning the jsx
    return (
        <div className="h-full w-full flex flex-col justify-between">
            <div className="w-full h-32 flex items-center justify-center ">
                <img src="image/companyLogo.jpg" alt="companyLogo" className="h-32 w-32 flex">
                </img>
            </div>
            <div className="w-full h-32 flex items-center justify-center">
                <div className=" text-6xl font-extrabold text-green-800">YAH</div>
            </div>
            <div >
                <img src="/image/lastPage.jpg" alt="highFive" className="h-64 w-full"></img>
            </div>
            <div className="w-full h-32 flex  justify-center">
                <button className=" border w-36 h-16 border-solid bg-black text-white rounded-full font-bold text-xl" onClick={() => props.setCurrentPage("first")}>
                    PLAY AGAIN</button>
            </div>


        </div >



    );
}

