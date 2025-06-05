const API_key = '0cea21933183c24ef02f7f43aaddff5f';
const API_URL ='https://api.themoviedb.org/3'

export const getPopularMovies = async () => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_key}`);
    const data = await response.json();
    return data.results;
   
};


export const searchMovies = async (query) => {
    const response = await fetch(
        `${API_URL}/search/movie/popular?api_key=${API_key}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json();
    return data.results;
};