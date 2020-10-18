import React from "react"

function About(){
    return(
        <div style={{border: "2px solid #ccc", marginTop:"80px", margin: "auto", backgroundColor:"white", maxWidth:"80%"}}>
        <h1 style={{textAlign: "center"}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
        <ol>
          <li><strong style={{width: "100px"}}>Nama:</strong> Wito Irawan</li> 
          <li><strong style={{width: "100px"}}>Email:</strong> witoirawan7@gmail.com</li> 
          <li><strong style={{width: "100px"}}>Sistem Operasi yang digunakan:</strong> Windows 10</li>
          <li><strong style={{width: "100px"}}>Akun Gitlab:</strong> Witoguard</li> 
          <li><strong style={{width: "100px"}}>Akun Telegram:</strong> witoirawan</li> 
        </ol>
        </div>
  
    )
}

export default About