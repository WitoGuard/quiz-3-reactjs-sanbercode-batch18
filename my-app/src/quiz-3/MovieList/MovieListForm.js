import React, {useContext, useState, useEffect} from "react"
import axios from "axios"
import {MovieListContext} from "./MovieListContext"

const MovieListForm = () =>{
  const [movieList, setMovieList] = useContext(MovieListContext)
  const [input, setInput] = useState({title: "", description: "", year: 2020, duration: 120, genre: "", rating: 0, image_url:""})

  useEffect(()=>{
    if (movieList.statusForm === "changeToEdit"){
      let dataFilm = movieList.lists.find(x=> x.id === movieList.selectedId)
      setInput({title: dataFilm.title, description: dataFilm.description, year: dataFilm.year, duration: dataFilm.duration, genre: dataFilm.genre, rating: dataFilm.rating, image_url:dataFilm.image_url})
      setMovieList({...movieList, statusForm: "edit"})
    }
  },[movieList, setMovieList])

  const handleChange = (event) =>{
    let typeOfInput = event.target.name

    switch (typeOfInput){
      case "title":
      {
        setInput({...input, title: event.target.value});
        break
      }
      case "description":
      {
        setInput({...input, description: event.target.value});
        break
      }
      case "year":
      {
        setInput({...input, year: event.target.value});
          break
      }
      case "duration":
      {
        setInput({...input, duration: event.target.value});
        break
      }
      case "genre":
      {
        setInput({...input, genre: event.target.value});
        break
      }  
      case "rating":
      {
        setInput({...input, rating: event.target.value});
        break
      }
      case "image_url":
      {
        setInput({...input, image_url: event.target.value});
        break
      }
    default:
      {break;}
    }
  }
  
  const handleSubmit = (event) =>{
    // menahan submit
    event.preventDefault()

    let title = input.title
    let description = input.description.toString()
    let duration = input.duration
    let genre = input.genre
    let rating = input.rating
    let image_url = input.image_url
    

    if (movieList.statusForm === "create"){        
      axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title, description, year: input.year, duration, genre, rating, image_url})
      .then(res => {
          setMovieList(
            {statusForm: "create", selectedId: 0,
            lists: [
              ...movieList.lists, 
              { id: res.data.id, 
                title: input.title, 
                description: input.description,
                year: input.year, 
                duration: input.duration,
                genre: input.genre,
                rating: input.rating,
                image_url: input.image_url
              }]
            })
      })
    }else if(movieList.statusForm === "edit"){
      axios.put(`http://backendexample.sanbercloud.com/api/movies/${movieList.selectedId}`, {title, description, year: input.year, duration, genre, rating, image_url})
      .then(() => {
          let dataFilm = movieList.lists.find(el=> el.id === movieList.selectedId)
          dataFilm.title = input.title
          dataFilm.description = input.description
          dataFilm.year = input.year
          dataFilm.duration = input.duration
          dataFilm.genre = input.genre
          dataFilm.rating = input.rating
          dataFilm.image_url = input.image_url
          setMovieList({statusForm: "create", selectedId: 0, lists: [...movieList.lists]})
      })
    }

    setInput({title: "", description: "", year: "", duration: "", genre: "", rating: "", image_url: ""})

  }
  return(
    <div style={{backgroundColor:"white", maxWidth:"930px", margin:"0 auto", padding:"1px"}}>
      <h1>Movies Form</h1>

      <div style={{width: "50%", margin: "0 auto", display: "block", marginBottom: "80px"}}>
        <div style={{border: "1px solid #aaa", padding: "20px"}}>
          <form onSubmit={handleSubmit}>
            <label style={{float: "left"}}>
              Title:
            </label>
            <input style={{float: "right"}} type="text" name="title" value={input.title} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Description:
            </label>
            <textarea style={{float: "right"}} type="text" name="description" value={input.description} onChange={handleChange}/>
            <br/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Year:
            </label>
            <input style={{float: "right", width: "60px"}} type="number" name="year" min="1980" value={input.year} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Duration:
            </label>
            <input style={{float: "right"}} type="number" name="duration" value={input.duration} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              genre:
            </label>
            <input style={{float: "right"}} type="text" name="genre" value={input.genre} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Rating:
            </label>
            <input style={{float: "right", width: "60px"}} type="number" name="rating" min="0" max="10" value={input.rating} onChange={handleChange}/>
            <br/>
            <br/>
            <label style={{float: "left"}}>
              Image Url:
            </label>
            <textarea style={{float: "right", width: "300px",height:"40px"}} type="text" name="image_url" value={input.image_url} onChange={handleChange}/>
            <br/>
            <br/>
            <br/>
            <div style={{width: "100%", paddingBottom: "20px"}}>
              <button style={{ float: "right"}}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MovieListForm