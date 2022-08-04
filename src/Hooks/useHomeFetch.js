import { useEffect, useState } from "react";

//api
import API from '../API'

const initialstate = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
}

export const useHomeFetch = () => {
    const [SearchTerm, setSearchTerm] = useState('');
    const [state, setstate] = useState(initialstate);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);


    console.log(SearchTerm)




    const fetchmovies = async (page, SearchTerm = "") => {
        try {
            seterror(false);
            setloading(true);
            

            const movies = await API.fetchMovies(SearchTerm, page);
            console.log(movies);

            setstate(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]

            }))
            setloading(false);
        } catch (error) {
            seterror(true);

        }

    };

    //search
    useEffect(() => {
        setstate(initialstate);
        fetchmovies(1, SearchTerm)
    }, [SearchTerm])

    //loadmore
    useEffect(() =>{
        if (!isLoadingMore) return;
        
        fetchmovies(state.page + 1, SearchTerm)
        setIsLoadingMore(false);
    },[isLoadingMore, SearchTerm, state.page])

    return { state, loading, error, SearchTerm, setSearchTerm, setIsLoadingMore };
}