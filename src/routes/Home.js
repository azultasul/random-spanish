import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>Home
      <Link to="/community">community</Link>
      <Link to="/mypage">mypage</Link>
    </div>
  )
}

export default Home;