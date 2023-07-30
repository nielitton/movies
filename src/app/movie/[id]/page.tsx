import { Header } from "@/components/header";
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
    </>
  );
}
