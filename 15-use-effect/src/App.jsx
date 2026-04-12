import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [a,setA]= useState(0)
  const [b,setB]= useState(0)
  function achangeing(){
    console.log('a is changing ');
  }
   function bchangeing(){
    console.log('b is changing ');
  }
  useEffect(function(){
    achangeing()
  },[a])
  useEffect(function(){
    bchangeing()
  },[b])
  return (

    <div>
      <div>
        <h1>{a}</h1>
        <h1>{b}</h1>
      </div>
      <button onClick={function(){
        setA(a+2)
      }}> change A </button>
      <button onClick={function(){
        setB(b-5)

      }}>change B

      </button>
    </div>
  )
}

export default App