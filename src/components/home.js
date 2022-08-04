import React from "react";


//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// compnents
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb/index";
import Spinner from "./Spinner";
import SearchBar from "./Searchbar";
import Button from "./Button";

// hooks
import { useHomeFetch } from '../Hooks/useHomeFetch'
// images
import NoImage from '../images/no_image.jpg';

const Home = () => {

  const { state, loading, error, SearchTerm, setSearchTerm, setIsLoadingMore } = useHomeFetch();
  // if (loading)
  //   return <> </>
  console.log(state)

  if (error) return <div>Something Went Wrong....</div>
  return (
    <>
      {!SearchTerm && state?.results[0] ? (

        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state?.results[0]?.original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid headers={SearchTerm ? 'Results' : 'Popular Movies'}>
        {state.results.map(movie => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />

        ))};

      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
    </>
  )

};

export default Home;

