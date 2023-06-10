import React, { Component } from 'react'

export default class Ex2 extends Component {
    state = { counter: 0 };
    pix_ar = ["2.png", "4.png", "1.png", "3.png"];

    next = () => {
        if (this.state.counter + 1 < 4) {
            this.setState({ counter: this.state.counter + 1 });
        }
        else {
            // this.counter=0;
            this.setState({ counter: 0 });
        }
    }

    back = () => {
        if (this.state.counter - 1 < 0) {
            // this.counter=0;
            this.setState({ counter: 3 });
        }
        else {
            this.setState({ counter: this.state.counter - 1 });

        }
    }


    render() {
        return (
            <>
                <img src={"/images/" + this.pix_ar[this.state.counter]} width="200"></img>
                <button onClick={this.back}>BACK</button>
                <button onClick={this.next}>NEXT</button>
            </>
        )
    }
}