// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './css/App.css'
import Favorites from './pages/Favorites';
//default export and not a named export
//import MovieCard from './components/MovieCard'

import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
function App() {
  //A component in react returns JSX markup. 
  //something is only jsx if it has a parent element 
 // const [count, setCount] = useState(0)
 //const movieNumber

  return (
    //fragment <> </> allows for repetition of components
    //<>
    <MovieProvider >
      <NavBar></NavBar>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/favorites' element={ <Favorites />}></Route>
      </Routes>
    </main>
    </MovieProvider>
   // </>
  )
}


export default App;
