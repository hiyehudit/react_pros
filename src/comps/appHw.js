// import AppTv from './api_comps/appTv';
// import './App.css';
// import '../App.css';
// import AppHooks from './hooks_comps/appHooks';
// import AppWeather from './weather_comps/appWeather';
// import AppHw from './hw_comps/appHw';
import React, { Component } from 'react'

// import ParentComp from './parentComp'
import App from './hw/hw/mission1/app';
import AppCazino from './hw/hw/mission3/appCazino';

export default class AppHw extends Component {
 render() {
  return (
   <React.Fragment>
    {/* <hr/> */}
    {/* <CarsList /> */}

    {/* mission1: */}
    {/* <App/> */}

    {/* mission2 */}
    <AppCazino/>
    <hr/>
    {/* <ParentComp /> */}
    {/* <ParentComp/> */}
    <hr/>
   </React.Fragment>
  )
 }
}



