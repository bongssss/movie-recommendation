// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//default export vs named export
import MovieCard from './components/MovieCard'

function App() {
  //A component in react returns JSX markup. 
  //something is only jsx if it has a parent element 
 // const [count, setCount] = useState(0)

  return (
    //fragment <></>
    <>
      <MovieCard movie={{title: "Ubong's Film", release_date: "2025" }}></MovieCard>
      <MovieCard movie={{title: "Favour's Film", release_date: "2025" }}></MovieCard>
      <MovieCard movie={{title: "Vine's Film", release_date: "2025" }}></MovieCard>
      <MovieCard movie={{title: "Jewel's Film", release_date: "2025" }}></MovieCard>
    
    
    
    </>
  )
}


export default App
