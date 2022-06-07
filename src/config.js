import axios from 'axios';

const apiKey = 'a4999a28333d1147dbac0d104526337a';
const url = 'https://api.themoviedb.org/3';
const trend = `${url}/movie/popular`;
const search = `${url}/search/multi`;
const anime = `${url}/discover/movie`;


export const comedy = async () => {
 
    try {
        const { data } = await axios.get(anime,{
            params: {
                api_key: apiKey,
                language:'en-US',
                with_genres:'99',
                Page:'1',
                
                
                
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))


        return modifiedData;
    } catch (error) { }
}

export const horror = async () => {
 
    try {
        const { data } = await axios.get(anime,{
            params: {
                api_key: apiKey,
                language:'en-US',
                with_genres:'27',
                Page:'1',
                
                
                
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))


        return modifiedData;
    } catch (error) { }
}


export const fetchMovies = async () => {
 
    try {
        const { data } = await axios.get(trend, {
            params: {
                api_key: apiKey,
                language:'en-US',
                Page:'1',
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularity"'],
            title: m['original_title'],
            titlee: m['name'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))


        return modifiedData;
    } catch (error) { }
}


export const getAnime = async () => {
 
    try {
        const { data } = await axios.get(anime,{
            params: {
                api_key: apiKey,
                language:'en-US',
                with_genres:'16',
                Page:'1',
                
                
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))


        return modifiedData;
    } catch (error) { }
}

export const searchMovies = async (idi) => {
 
    try {
        const { data } = await axios.get(search, {
            params: {
                api_key: apiKey,
                language:'en-US',
                query:idi,
                Page:'1',
                include_adult:'false',
                
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((m) => ({
            id: m['id'],
            backPoster: posterUrl + m['backdrop_path'],
            popularity: m['popularith'],
            title: m['title'],
            poster: posterUrl + m['poster_path'],
            overview: m['overview'],
            rating: m['vote_average'],
        }))


        return modifiedData;
    } catch (error) { }
}

export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${url}/movie/${id}`, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                           
            }
        })
       
        return data;
    } catch (error) { }
}