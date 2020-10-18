import React, {useContext, useEffect} from "react"
import axios from "axios"
import {MovieListContext} from "./MovieListContext"

const MovieList = () =>{

  const [movieList, setMovieList] = useContext(MovieListContext)

  useEffect( () => {
    if (movieList.lists === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
      .then(res => {
        setMovieList({
          ...movieList, 
          lists: res.data.map(el=>{ 
            return {id: el.id,
              title: el.title, 
              description: el.description, 
              year: el.year,
              duration: el.duration,
              genre: el.genre,
              rating: el.rating 
            }
          })
        })
      })
    }
  }, [setMovieList, movieList])

  const handleEdit = (event) =>{
    let ID_MOVIES = parseInt(event.target.value)
    setMovieList({...movieList, selectedId: ID_MOVIES, statusForm: "changeToEdit"})
  }

  const handleDelete = (event) => {
    let ID_MOVIES = parseInt(event.target.value)

    let newLists = movieList.lists.filter(el => el.id !== ID_MOVIES)

    axios.delete(`http://backendexample.sanbercloud.com/api/movies/${ID_MOVIES}`)
    .then(res => {
      console.log(res)
    })
          
    setMovieList({...movieList, lists: [...newLists]})
    
  }

  return(
    <>
      <h1>Daftar Film</h1>
      <table style={{backgroundColor:"white"}}>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Description</th>
            <th>Year</th>
            <th>Duration</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

            {
              movieList.lists !== null && movieList.lists.map((item, index)=>{
                return(                    
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td style={{textOverflow:"ellipsis"}}>{item.description}</td>
                    <td>{item.year}</td>
                    <td>{item.duration}</td>
                    <td>{item.genre}</td>
                    <td>{item.rating}</td>
                    <td>
                      <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
      </table>      
    </>
  )
}

export default MovieList