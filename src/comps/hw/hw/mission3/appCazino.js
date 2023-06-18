import React, { useState } from 'react'

export default function AppCazino() {

    const [random,setRandom]=useState(0);
    const [coins, setCoins]=useState(5);
    const [color,setColor]=useState("green");
    const [msg,setMsg]=useState("U win!");

    // const changeRand=()=>{
    //     // const randomNumber = Math.floor(Math.random() * 6) + 1;
    // }


    const onRollClick=()=>{
      if(coins==0){
        alert("U lose! go get some money");
        setMsg("U lose!");
        setColor("red");
        let rnd=(Math.ceil(Math.random() * 6));
      }
      if(random==5||random==6){
        setCoins(coins+2);
        setMsg("U win!");
        setColor("green");

      }
      else{
        setCoins(coins+1);
        setMsg("U win!");
        setColor("green");
      }
    }


  return (
<div>
    <h4>{random}</h4>
    <button onClick={onRollClick} >
        Roll
    </button>
    {/* <img src={`/img_cube/${random}.jpg`} alt={random}/> */}
    <h2 style={{color:color}}>Score: {coins}</h2>
    <h2 style={{color:color}}>{msg}</h2>
</div>
  )
}

// const images = {
//   1: "https://image.flaticon.com/icons/png/512/1375/1375472.png",
//   2: "https://image.flaticon.com/icons/png/512/1375/1375471.png",
//   3: "https://image.flaticon.com/icons/png/512/1375/1375469.png",
//   4: "https://image.flaticon.com/icons/png/512/1375/1375470.png",
//   5: "https://image.flaticon.com/icons/png/512/1375/1375473.png",
//   6: "https://image.flaticon.com/icons/png/512/1375/1375474.png",
// };

// const Game = () => {
//   const [coins, setCoins] = useState(5);
//   const [score, setScore] = useState(0);
//   const [message, setMessage] = useState("");

//   const rollDice = () => {
//     if (coins <= 0) {
//       setMessage("Please add more coins to play again.");
//       return;
//     }

//     const randomNumber = Math.floor(Math.random() * 6) + 1;
//     const imageUrl = images[randomNumber];

//     if (randomNumber === 5 || randomNumber === 6) {
//       setScore(score + 2);
//       setMessage("You won!");
//     } else {
//       setScore(score - 1);
//       setMessage("You lost!");
//     }

//     setCoins(coins - 1);
//     document.getElementById("dice-image").src = imageUrl;
//   };

//   const addCoins = () => {
//     setCoins(coins + 5);
//     setMessage("");
//   };

//   return (
//     <div>
//       <h1>Roll The Dice Game</h1>
//       <p>Coins: {coins}</p>
//       <p>Score: {score}</p>
//       <img
//         id="dice-image"
//         src="https://image.flaticon.com/icons/png/512/1375/1375472.png"
//         alt="Dice"
//       />
//       <br />
//       <button onClick={rollDice}>Roll</button>
//       <button onClick={addCoins}>Add Coins</button>
//       <br />
//       <p style={{ color: score >= 0 ? "green" : "red" }}>{message}</p>
//     </div>
//   );
// };

// export default Game;