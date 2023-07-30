import Link from "next/link";
import { MovieCard } from "@/app/styles-components";
import { Movie } from "../../../interfaces";

export const SerieCardContainer = ({ serie }: { serie: Movie }) => {
  return (
    <MovieCard>
      <Link href={`/serie/${serie.id}`}>
        <img
          width="250"
          height="auto"
          src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
          alt="Imagem do filme em questão"
        />
      </Link>
      <span>{serie.name}</span>
      <span>Media de votos: {serie.vote_average}</span>
    </MovieCard>
  );
};
