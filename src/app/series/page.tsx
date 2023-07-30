import { Header } from "@/components/header";
import { MoviesDash } from "@/components/moviesRender";
import { axiosClient } from "@/services/axiosClient";
import { Movie, TmdbDiscoverApiResponse } from "../../../interfaces";
import { SeriesDash } from "@/components/seriesRender";

const dataGet = async () => {
  const response = await axiosClient.get<TmdbDiscoverApiResponse<Movie>>(
    "/discover/tv/?include_image_language=en"
  );

  return response.data.results;
};

export default async function Series() {
    const movies = await dataGet()
    return (
    <>
      <Header />
      <SeriesDash series={ movies } />
    </>
  );
}
