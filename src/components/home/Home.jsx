import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/cook-temps">Cook Temps</Link>

    </div>
  )
};

export default Home;