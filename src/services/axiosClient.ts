import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGZhYzg5ZmE3MjliYTY0MmZhNTdkN2Q1MGEwZTczZiIsInN1YiI6IjY0YzU3YjMxZWVjNWI1MDExY2IwNWE0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QHJx7EZN8pmndFWY2TEkhljzHL9Kj-v_DFv1ut2weDI"
    }
})