import React from 'react'
import ReactDOM  from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Greeting(){
  return <center><h1>...this is the component...</h1></center>
}

root.render(<div>
  {Greeting()}
  
</div>)