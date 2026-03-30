import React from 'react'
import './index.css'

const App = () => {
  const formHandler=(e)=>{
    e.preventDefault()
    console.log("form submitted");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formHandler(e)
      }}>
        <input type='text' placeholder='Enter your name'></input>
        <button>Submit</button>

      </form>
    </div>
  )
}

export default App