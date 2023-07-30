import { axiosClient } from "@/services/axiosClient"
import { useRouter } from "next/router"

const getDataMovie = async ({ id }: { id: string }) => {
    const movie = await axiosClient.get(`/movie/${id}`)

    return movie.data
}

export default async function MoviePage() {
    const path = useRouter()
    const id = path.replace("/movie/", "")

    const movieData = await getDataMovie({ id })

    console.log(movieData)

    return(
        <>
            <h1>Movie</h1>
        </>
    )
}