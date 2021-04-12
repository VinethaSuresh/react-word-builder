import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export function FirstPage() {

    return (
        <div className="h-full w-full bg-red-600 flex flex-col">
            <img src="image/companyLogo.jpg" alt="companyLogo" className="h-28 w-28">
            </img>
            <div>start page</div>
            <Link to="/main"><button>clickMe</button></Link>
        </div>

    );
}