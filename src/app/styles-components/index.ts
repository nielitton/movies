'use client'
import { styled } from "styled-components";

export const ContainerHeader = styled.header`
    height: 50px;
    background-color: var(--background-color);
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;
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
        transition: all .5s;
    }
    img:hover {
        transition: all .5s;
        transform: scale(1.025)
    }

`

export const MoviePageStyleContainer = styled.div`
    padding: 25px 0px;
    display: flex;
    justify-content: space-around;
`

export const MovieSideInfos = styled.div`
    width: 25%;
    h2 {
        color: var(--text-colors-light);
        font-weight: bolder;
        font-size: 1.8rem;
    }
    p {
        font-size: 1.3rem;
        font-weight: bolder;
    }
    .left-infos {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .right-infos {
        display: flex;
        gap: 25px;
    }
    .genres-container {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
`

export const ButtonBackStyle = styled.h1`
    text-align: center;
    color: var(--text-colors-light);
`