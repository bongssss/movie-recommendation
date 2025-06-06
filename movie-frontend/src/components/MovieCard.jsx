import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContext'; 

function MovieCard({movie}){
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)
//created a component(function)
//called MovieCard that returns several properties 
//including the card which contains the poster
//which contains the image which is overlayed by a button which returns an alert when clicked(for now)
//it also has a div that contains the title as a heading and the release date as a paragraph

    function onFaveClick(e){ //this is the function that is returned by the button when clicked
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
            else addToFavorites(movie)
    
}

    return <div className="movie-card">
        <div className="movie-poster">

            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <div className="movie-overlay">
            <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFaveClick}>♥</button>
        </div>
        </div>
        
         <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split('-')[0]}</p>
            </div> 
    </div>
  
}

export default MovieCard; 
// the function(component) is then exported as a default export