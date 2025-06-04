// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //A component in react returns JSX markup. 
  //something is only jsx if it has a parent element 
 // const [count, setCount] = useState(0)

  return (
    //fragment <></>
    <>
  
    <Text display={'Ubong'}/>
    
    <Text display={'Hello'}/>
   </>
  )
}
//creatind/defining A custom component
function Text({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}
export default App
