import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

import IGenreResponse from "../types/IGenreResponse";
import IMovie from "../types/IMovie";

import "../styles/content.scss";

interface ContentProps {
  selectedGenre: IGenreResponse;
  movies: IMovie[];
}

export function Content(props: ContentProps) {
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponse>(
    props.selectedGenre
  );
  const [movies, setMovies] = useState<IMovie[]>(props.movies);

  useEffect(() => {
    setSelectedGenre(props.selectedGenre);
    setMovies(props.movies);
  }, [props]);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
