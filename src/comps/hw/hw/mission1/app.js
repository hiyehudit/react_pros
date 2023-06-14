import React from 'react'
import Color from './color'

export default function App() {
    const [color, setColor] = ("pink");
    // state = { color: "pink" }

    const changeFontColor = (_newColor) => {
        this.setState({ color: _newColor });
    }
    return (
        <div className='text-center'>
            <h1 style={color}>WELCOME TO CUSTOM</h1>
            <Color changeFontColor={changeFontColor} />
        </div>
    )
}
