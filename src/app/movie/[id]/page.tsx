import {
  MoviePageStyleContainer,
  MovieSideInfos,
} from "@/app/styles-components";
import { Header } from "@/components/header";
import { MovieCardContainer } from "@/components/movieCard";
import { axiosClient } from "@/services/axiosClient";

const getDataMovie = async ({ id }: { id: string }) => {
  const movie = await axiosClient.get(`/movie/${id}`);

  return movie.data;
};

type Props = {
  params: { id: string };
};

export default async function MoviePage({ params }: Props) {
  const id = params.id;

  const movie = await getDataMovie({ id });

  return (
    <>
      <Header />
      <MoviePageStyleContainer>
        <MovieSideInfos>
          <div className="left-infos">
            <h2>Overview</h2>
            <p>{movie.overview}</p>
          </div>
        </MovieSideInfos>
        <MovieCardContainer movie={movie} />
        <MovieSideInfos>
          <div className="right-infos">
            <div>
              <h2>Status</h2>
              <p>{movie.status}</p>
            </div>
            <div>
              <h2>Genres</h2>
              <div className="genres-container">
                {movie.genres.map((genre) => {
                  return <p key={genre.id}>{genre.name}</p>;
                })}
              </div>
            </div>
          </div>
        </MovieSideInfos>
      </MoviePageStyleContainer>
    </>
  );
}
