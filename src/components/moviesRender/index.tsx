import { ContainerMovies, MovieCard } from "@/app/styles-components";
import { Movie } from "../../../interfaces";
import { MovieCardContainer } from "../movieCard";

export const MoviesDash = ({ movies }: { movies: Movie[] }) => {
  return (
    <ContainerMovies>
      {movies.map((movie) => {
        return <MovieCardContainer key={movie.id} movie={movie} />;
      })}
    </ContainerMovies>
  );
};
