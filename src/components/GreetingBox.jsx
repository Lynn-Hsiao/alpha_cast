import React from 'react'

const GreetingWord = () => {
    const d = new Date();
    let hour = d.getHours();
    console.log(hour)
    if ( 4 < hour && hour < 12 ) {
      return ("早安")
    } else if ( 11 < hour && hour < 18) {
      return ("午安")
    } else {
      return ("晚安")
    }
  }


const GreetingBox = () => { 
  return (
    <div className="greeting-box">
      <GreetingWord />
    </div>
  )
}

export default GreetingBox