import React from 'react';
import axios from "axios"
import NavbarR from '../NavbarR';
import Timer from '../Timer'

function Quiz() {
    return (
        <div>
            <NavbarR/>
            <h1>Here's the quiz page</h1>
            <Timer/>
        </div>
    )
}

export default Quiz
