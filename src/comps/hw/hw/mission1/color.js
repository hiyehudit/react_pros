import React from 'react'
import App from './app'
import { render } from '@testing-library/react'

export default function Color(props) {
    return (
        <div>
            <button onClick={() => {
                props.changeFontColor("blue")
            }}>Blue</button>
        </div>
    )
}
