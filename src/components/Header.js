import React from 'react'
import { NavLink } from 'react-router-dom';
// import Background from './img/old-womens-basketball-game-play.jpg';

// var jumbotronStyle = {
//   backroundImage: `url(${Background})`
// }

const Header = () => (
  <header>
    <nav>
      <NavLink className="btn btn-outline-warning m-2" to="/home">Home</NavLink>
      <NavLink className="btn btn-outline-warning m-2" to="/learnmore">Learn More</NavLink>
      <NavLink className="btn btn-outline-warning m-2" to="/about">About</NavLink>
    </nav>
    <div class="jumbotron">
      <h1 class="display-4 p-1 font-weight-bold text-center">
        Women's Basketball Through The Years
      </h1>
    </div>
  </header>
);


export default Header;