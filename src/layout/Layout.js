import React, { Fragment } from "react";
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <Fragment>
      <header>
        <ul>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/community">community</Link></li>
          <li><Link to="/mypage">mypage</Link></li>
        </ul>
      </header>
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Home;