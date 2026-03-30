import React from 'react'

const App = () => {
  function onclicking(){
    console.log("clicked...")
  }
  return (
    <div>
      <button  onClick={onclicking}>click here</button>
    </div>
  )
}

export default App