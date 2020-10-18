import React from "react"

function Login () {
    return(
        <div>
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