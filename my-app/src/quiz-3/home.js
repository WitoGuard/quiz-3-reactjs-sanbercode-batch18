import React, {useState, useEffect} from "react"
import axios from "axios"

const Home = () => {
const [film, setFilm] =  useState(null)

useEffect( () => {
    axios.get(`http://backendexample.sanbercloud.com/api/movies`)
    .then(res => {
      setFilm(res.data.map(el=>{return {id: el.id, title: el.title, description: el.description, duration: el.duration, genre: el.genre, rating: el.rating, image_url: el.image_url}}))
    })
  },[film])

  const img={
    width: "400px",
    objectFit: "cover",
    height: "400px",
    "border-top-left-radius": "10px",
    "border-top-right-radius": "10px",
    marginleft: "30px"
  }

return(
    <div style={{backgroundColor:"white", margin:"auto",border: "1px", maxWidth: "80%", borderRadius: "8px" }}>
    <h1>Daftar Film Film Terbaik</h1>
    <br/>
    {
              film !== null && film.map((item, index)=>{
                return(    
                <div key={index}>                
                  <h2>{item.title}</h2>
                  <div style={{display:"inline"}}>
                  <img style={img} src={item.image_url}/>
                  <h4>Rating:{item.rating}</h4>
                  <h4>Durasi:{item.duration}</h4>
                  <h4>Genre:{item.genre}</h4>
                  </div>                 
                  <h3>Deskripsi:</h3>
                  <p>{item.description}</p>
                </div>                  
                )
              })
            }
    </div>
)
}

export default Home