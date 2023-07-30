import Image from "next/image";
import { Movie } from "../../../interfaces";

export const MoviesDash = ({ movies }: { movies: Movie[] }) => {
  return (
    <>
      {movies.map((movie) => {
        return (
            <>
            <img width="250" height="auto" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            <div key={movie.id}>{movie.title}</div>
            </>
        )
      })}
    </>
  );
};
