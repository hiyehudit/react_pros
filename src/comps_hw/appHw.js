
// import AppTv from './api_comps/appTv';
// import './App.css';
// import AppHooks from './hooks_comps/appHooks';
// import AppWeather from './weather_comps/appWeather';
// import AppHw from './hw_comps/appHw';
import React, { Component } from 'react'
import VipList from './vipList';
import AppAtlas from './appAtlas';


// import ParentComp from './parentComp'

export default class AppHw extends Component {
 render() {
  return (
   <React.Fragment>
    <hr/>
  {/* <VipList/> */}
    <hr/>
    <AppAtlas/>
    <hr/>
   </React.Fragment>
  )
 }
}



