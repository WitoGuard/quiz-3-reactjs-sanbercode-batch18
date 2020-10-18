import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './quiz3.css';
import logo from "./gambar/logo-sanber.png"
import About from "./about";
import Movie from "./MovieList/Movie"
import Home from "./home"
import login from "./Login"


const Routes = () => {
  return (
    <Router>
        <div>
        <header>
         <img id="logo" alt="logo Sanber" src={logo} width="200px" />
         <nav>
           <ul>
             <li>
              <Link to="/home">Home</Link>
              </li>
             <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/MovieList/Movie">Movie List Editor</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
           </ul>
         </nav>
       </header> 
        <Switch>
          {/* contoh route dengan component nya sebagai child */}
          <Route exact path="/home" component={Home}>
            {/* <Form /> */}
          </Route>
          {/* contoh route dengan component nya sebagai props */}
          <Route exact path="/about" component={About} />
          {/* <Route exact path="/materi-14" component={Tugas14} /> */}
          <Route exact path="/MovieList/Movie" component={Movie} /> 
          <Route exact path="/login" component={login} />
        </Switch>
      </div>
      <footer>
        <h5>copyright &copy; 2020 by Sanbercode</h5>
      </footer>
    </Router>
  );
}

export default Routes

