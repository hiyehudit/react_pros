import React, { Component } from 'react'
// import CarsList from './carsList'
import ParentComp from './childComp'

export default class AppHw extends Component {
 render() {
  return (
   <React.Fragment>
    <hr/>
    <CarsList />
    <hr/>
    <ParentComp />
    <hr/>
   </React.Fragment>
  )
 }
}




