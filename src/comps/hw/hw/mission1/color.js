import React from 'react'
import App from './app'

export default function Color(props) {
    // let func=props.changeFontColor;
    return (
        <div>
            <button onClick={() => {
                props.changeFontColor("blue")
            }}>Blue</button>
        </div>
    )
}
