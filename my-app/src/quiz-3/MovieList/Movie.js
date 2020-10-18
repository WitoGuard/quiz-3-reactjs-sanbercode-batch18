import React from "react"
import {MovieListProvider} from "./MovieListContext"
import MovieList from "./MovieList"
import MovieListForm from "./MovieListForm"
import "./MovieList.css"

const Movie = () =>{
  return(
    <>
      <MovieListProvider>
        <MovieList/>
        <MovieListForm/>
      </MovieListProvider>
    </>
  )
}

export default Movie