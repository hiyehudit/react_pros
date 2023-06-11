import React from 'react'
import './App.css';
// import AppDate from './comps_date/appDate';
// import AppHw from './comps/appHw';
import ShopList from './comps_loop/shopList';

function App() {
  //  <React.Fragment> -> משמש בתור תגית
  // עוטפת אבל שלא מרונדרת בדפדפן
  return (
    <React.Fragment>
      <h1 className='text-danger'>React</h1>
      <ShopList />
      <hr/>
      {/* <AppDate/> */}
      {/* <AppHw /> */}
    </React.Fragment> 
  );
}

export default App;