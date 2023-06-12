import React, { useState } from 'react'
import DateView from './dateView';
import DateInput from './dateInput';

export default function AppDate() {
const [deadLine,setDeadLine]=useState("2024-01-01");


  return (
    <div className='container'>
        <DateView deadLine={deadLine}/>
        <DateInput setDeadLine={setDeadLine}/>
    </div>
  )
}
