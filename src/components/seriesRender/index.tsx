import { ContainerMovies, MovieCard } from "@/app/styles-components";
import { Movie } from "../../../interfaces";
import { SerieCardContainer } from "../serieCard";

export const SeriesDash = ({ series }: { series: Movie[] }) => {
  return (
    <ContainerMovies>
      {series.map((serie) => {
        return <SerieCardContainer key={serie.id} serie={serie} />;
      })}
    </ContainerMovies>
  );
};
