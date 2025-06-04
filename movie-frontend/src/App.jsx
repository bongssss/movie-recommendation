// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//default export and not a named export
import MovieCard from './components/MovieCard'

import Home from './pages/Home'

function App() {
  //A component in react returns JSX markup. 
  //something is only jsx if it has a parent element 
 // const [count, setCount] = useState(0)
 //const movieNumber

  return (
    //fragment <> </> allows for repetition of components
    <>
     <Home/>
    
    
    
    </>
  )
}


export default App;
