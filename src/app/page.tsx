import styles from "./page.module.css";
import { Header } from "@/components/header";
import { axiosClient } from "../services/axiosClient";
import { Movie, TmdbDiscoverApiResponse } from "../../interfaces";
import { MoviesDash } from "@/components/moviesRender";

const dataGet = async () => {
  const response = await axiosClient.get<TmdbDiscoverApiResponse<Movie>>("/discover/movie/?include_image_language=en");

  return response.data.results;
};

export default async function Home() {
  const movies = await dataGet()

  console.log(movies)

  return (
    <main className={styles.main}>
      <Header />
      <MoviesDash movies={ movies } />
    </main>
  );
}
