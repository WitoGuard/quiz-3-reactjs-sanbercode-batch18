import React from "react"

function Login () {
    return(
        <div style={{marginTop:"100px", backgroundColor:"white", maxWidth:"80%", marginLeft: "30%", marginRight:"30%", padding:"5px"}}>
            <form>
            <label>Masukan Nama:</label>
            <input type="text"/>
            <br/>
            <label>Masukan Password:</label>
            <input type="password"/>
            <br/>
            <button>Login</button>
            </form>
        </div>
    )
}

export default Login