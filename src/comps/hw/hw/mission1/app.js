import React, { useState } from 'react'
import Color from './color'

export default function App() {
    const [color, setColor] = useState("pink");
    // state = { color: "pink" }

    const changeFontColor = (_newColor) => {
        setColor(_newColor);
    }
    return (
        <div className='text-center'>
            <h1 style={{color:color}}>WELCOME TO CUSTOM</h1>
            <Color changeFontColor={changeFontColor} />
        </div>
    )
}
