import { MovieCard } from "./MovieCard"


interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}
interface ContentProps{
  title: string;
  movies: Array<Movie>;
}

export function Content({title, movies}:ContentProps) {
  return(
    <>
      <header>
        <span className="category">Categoria:<span> {title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </>
    
  )
}

/**
 * 
 * 
 * 
 * 
 */