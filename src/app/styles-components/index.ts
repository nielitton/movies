'use client'
import { styled } from "styled-components";

export const ContainerHeader = styled.header`
    height: 50px;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: space-around;
    input {
        width: 20rem;
        height: 2rem;
        border-radius: 10px 0px 0px 10px;
        border: none;
        padding: 0px 10px;
        outline: none;
    }
    button {
        cursor: pointer;
        width: 5rem;
        height: 2rem;
        border: none;
        font-weight: bolder;
        border-radius: 0px 10px 10px 0px;
        color: var(--background-color);
    }
    ul {
        display: flex;
        gap: 1rem;
        font-size: 1.2rem;
        padding: 0px 15px;
    }

    .link-header {
        color: white;
    }

`

export const ContainerMovies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 0px;
    gap: 15px;
    width: 90%;
    margin: 0 auto;
    span {
        color: var(--text-color);
    }
`

export const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    span {
        cursor: pointer;
        width: 100%;
        font-weight: bolder;
        text-align: center;
    }
    img {
        cursor: pointer;
        border-radius: 22px 0px 22px 0px;
        box-shadow: 3px 3px 5px rgb(0, 0, 0, 0.2);
    }

`