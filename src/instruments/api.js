// Core
export const api = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const onlyApiKey = 'f95b4780d100c9d941e03e79486e1503';


export const getGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${onlyApiKey}&language=en-US`;
export const getMoviesApi = (filter) => `https://api.themoviedb.org/3/movie/${filter}?api_key=${onlyApiKey}&language=en-US&page=1`;
export const movieDetailsApi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${onlyApiKey}&language=en-US`;
