import React, { useState, createContext } from "react";

export const MovieListContext = createContext();

export const MovieListProvider = props => {
  const [movieList, setMovieList] = useState({
    lists: null,
    selectedId: 0,
    statusForm: "create"
  });

  return (
    <MovieListContext.Provider value={[movieList, setMovieList]}>
      {props.children}
    </MovieListContext.Provider>
  );
};