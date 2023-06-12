import React, { useEffect, useState } from 'react'

// props -> אם נרצה להביא מהאבא פרופס נצטרך להעביר
// לפונקציה שלה הקומפנינטה פרמטר בשם פרופס
export default function DateView(props) {
 const [days,setDays] = useState(999);

//  שמים את הפונ כמה שיותר למעלה
 //useEffect
 // [] -> מערך ריק מקביל ל
 // componentDidMount - פועל פעם אחת שהקומפ מופיע
 // [props.deadline] -> מקביל ל
 // componentDidUpdate -> כאשר יש שינוי בפרופס של הדידליין
 // מהאבא
     // ברגע שיש שינוי מפעיל את זה עוד פעם
    // []את מה שבתוך ה[
 useEffect(() => {
  calcDays(props.deadline);
 },[props.deadline])

// סוגריים ריקות[] - יפעל רק בפעם הראשונה או בריפרוש
//  useEffect(() => {
// calcDays(props.deadline)
//  },[])


 const calcDays = (_newDate) => {
  let time = Date.parse(_newDate) - Date.now();
  let newDays = Math.ceil(time/(1000*60*60*24))
  setDays(newDays);
 }

 return (
  <div className='text-center'>
   <h2>Countdown to: {props.deadline}</h2>
   <h3>Days left: {days}</h3>
  </div>
 )
}
