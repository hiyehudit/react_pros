import React, { Component } from 'react'

export default class Ex4 extends Component {

watches_ar=["gold.png","rolex.png","fossil.png"];
state={picture:""};
inputRef = React.createRef();


choosePic=()=>{
let value=this.inputRef.current.value;
this.setState({picture:value});
}

    render() {
        return (
            <>
            <h4>choose your favorite watch</h4>
            <select onChange={this.choosePic} ref={this.inputRef}>
                <option value={this.watches_ar[0]}>gold rolex</option>
                <option value={this.watches_ar[1]}>silver rolex</option>
                <option value={this.watches_ar[2]}>rose fossil</option>
            </select>
            <img src={"/img/"+this.state.picture} alt="watch" className='col-md-4'/>
            </>
        )
    }
}