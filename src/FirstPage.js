import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export function FirstPage() {
    // doing styleing using tailwind CSS and returning the jsx
    return (
        <div className="h-full w-full flex flex-col justify-between">
            <div className="w-full h-32 flex items-center justify-center ">
                <img src="image/companyLogo.jpg" alt="companyLogo" className="h-32 w-32 flex">
                </img>
            </div>
            <div className="w-full h-32 flex items-center justify-center">
                <div className="text-black text-4xl font-extrabold">Give me Five</div>
            </div>
            <div className="w-full h-32 flex  justify-center ">
                <Link to="/main">
                    <button className=" border w-36 h-16 border-solid bg-black text-white rounded-full font-bold text-2xl">
                        PLAY</button></Link>
            </div>
            <img src="firstPage.jpeg" alt="highFive" className=" bg-white h-72 w-full"></img>
        </div >

    );
}