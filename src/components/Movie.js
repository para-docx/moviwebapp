import React from 'react';
import { useParams } from 'react-router-dom';

//config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
//components
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

//hook
import { useMovieFetch } from '../Hooks/useMovieFetch'

//image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { movieId } = useParams();
    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />
    if (error) return <div>Somthing Went Wrong....</div>

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie}> </MovieInfo>
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            

        <Grid headers='Cast and Crew'>
            {movie.actors.map(actor => (
                <Actor
                  key={actor.credit_id}
                  name={actor.name}
                  character={actor.character}
                  imageUrl={
                      actor.profile_path
                      ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                      :NoImage
                  } 

                />  
            ))}

        </Grid>

        </>
    )
};

export default Movie;