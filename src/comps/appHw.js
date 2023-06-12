// import React, {Component} from "react";

// export default class AppHw extends Component{
//     render(){
//         return(
//             <>
            
//             </>
//         )
//     }
// }
import React, { Component } from 'react'

import ParentComp from './parentComp'

export default class AppHw extends Component {
 render() {
  return (
   <React.Fragment>
    <hr/>
    {/* <CarsList /> */}
    <hr/>
    <ParentComp />
    <hr/>
   </React.Fragment>
  )
 }
}
// import AppTv from './api_comps/appTv';
import './App.css';
// import AppHooks from './hooks_comps/appHooks';
// import AppWeather from './weather_comps/appWeather';
import AppHw from './hw_comps/appHw';


