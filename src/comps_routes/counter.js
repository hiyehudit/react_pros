import React,{useContext} from 'react'
import { AppContext } from '../context/context';

export default function Counter() {
  // בזכות זה אפשר לפנות לאבא בלי 
  // PROPS 
  // אלא רק עי שם המשתנה
// מעל 4-5 משתנים לעבור כבר לרידקס
  const {number,setNumber} = useContext(AppContext)

  return (
    <div className='container'>
      <h2>Counter: {number}</h2>
      <button onClick={() => {
        setNumber(number+1);
      }}>Add 1</button>
    </div>
  )
}