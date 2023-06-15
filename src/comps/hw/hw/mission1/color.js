import React from 'react'
import App from './app'

export default function Color(props) {
    return (
        <div>
            <button onClick={() => {
                props.changeFontColor("blue")
            }}>Blue</button>
            <button onClick={() => {
                props.changeFontColor("red")
            }}>Red</button>
            <button onClick={() => {
                props.changeFontColor("yellow")
            }}>Yellow</button>
        </div>
    )
}
