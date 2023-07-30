export interface MoviesApiResponse {
    results: Movie[]
}

export interface TmdbDiscoverApiResponse<T> {
    page: number;
    results: T[]
}

interface genre_ids {
    id: int
}

export interface Movie {
    adult: boolean,
    name: string,
    backdrop_path: string,
    genre_ids: genre_ids[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}