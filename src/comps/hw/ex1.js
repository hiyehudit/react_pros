import React, { Component } from 'react'

export default class Ex1 extends Component {
    state= {counter:0};

    minus=()=>{
        this.counter--;
        this.setState({counter: this.state.counter-1})
    }

    plus=()=>{
        if(this.state.counter+1<6){
            this.setState({counter: this.state.counter+1})
        }
        else{
            this.counter=0;
            this.setState({counter: 0})
        }
    }

    render() {
        return(
            <>
            <h2>{this.state.counter}</h2>
            <button onClick={this.minus}>-</button>
            <button onClick={this.plus}>+</button>
            </>
        )
    }
}