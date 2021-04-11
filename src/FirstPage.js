import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export function FirstPage() {

    return (
        <div>
            <div>

                <img src="image/companyLogo.jpg" alt="companyLogo" className="h-32 w-32"></img>
                <div>start page</div>
                <Link to="/main"><button>clickMe</button></Link>

            </div>
        </div>

    );
}