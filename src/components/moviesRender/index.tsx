import { ContainerMovies, MovieCard } from "@/app/styles-components";
import { Movie } from "../../../interfaces";
import Link from "next/link";

export const MoviesDash = ({ movies }: { movies: Movie[] }) => {
  return (
    <ContainerMovies>
      {movies.map((movie) => {
        return (
          <MovieCard key={ movie.id } >
            <Link  href={`/movie/${movie.id}`}>
              <img
                width="250"
                height="auto"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Imagem do filme em questão"
              />
            </Link>
            <span>{movie.title}</span>
            <span>Media de votos: {movie.vote_average}</span>
          </MovieCard>
        );
      })}
    </ContainerMovies>
  );
};
