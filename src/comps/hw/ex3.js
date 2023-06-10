import React, { Component } from 'react'

export default class Ex3 extends Component {
    state={color:""};
    colors_ar = ["red", "blue", "yellow", "green"];

    inputRef = React.createRef()

    chooseOption=()=>{
        // console.log(this.inputRef.current.value);
        let input_val = this.inputRef.current.value;
        this.setState({color:input_val})
    }

    render(){
        return(
            <>
            <h2 style={{color:this.state.color}}>choose your favorite color: {this.state.color}</h2>
                <select onChange={this.chooseOption} ref={this.inputRef}>
                    <option value={this.colors_ar[0]}>{this.colors_ar[0]}</option>
                    <option value={this.colors_ar[1]}>{this.colors_ar[1]}</option>
                    <option value={this.colors_ar[2]}>{this.colors_ar[2]}</option>
                    <option value={this.colors_ar[3]}>{this.colors_ar[3]}</option>
                </select>

            </>
        )
    }
}