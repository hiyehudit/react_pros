import React, { useState } from 'react'

export default function AppCazino() {

    const [random,setRandom]=useState(0);

    const changeRand=()=>{
        setRandom(Math.ceil(Math.random() * 6));
    }
  return (
<div>
    <h4>{{random}}</h4>
    <button onClick={changeRand}>
        Roll
    </button>
    {/* <img src=`./img_cube/${random}.jpg`/> */}

</div>
  )
}
