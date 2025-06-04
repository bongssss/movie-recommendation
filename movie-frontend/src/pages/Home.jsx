import MovieCard from "../components/MovieCard";
import { useState } from "react";


function Home() {
    const [searchQuery, setSearchQuery] = useState([]);


    const movies =[
        {id:1, title:"John Wick", release_date:2020},
        {id:2, title:"Terminator", yerelease_date:1999},
        {id:3, title:"The Matrix", release_date:1998},
        {id:4, title:"The Lord of the Rings", release_date:2001},
    ];

    const handleSearch =() => {
        console.log("Search button clicked");
    }
    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="search for movies..." 
            className="search-input" value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}></input>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) =>(
                <MovieCard movie={movie} key={movie.id}/>
        ))}
            
        </div>
    </div>
);
}

export default Home;


