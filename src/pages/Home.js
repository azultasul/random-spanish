import React, { useState, useEffect, Fragment } from "react";

const Home = () => {
  const [joke, setJoke] = useState();
  const getRandom = async () => {
    const response = await fetch('https://palabras-aleatorias-public-api.herokuapp.com/joke/random');
    const data = await response.json();
    const lines = data.body.lines;
    
    setJoke(lines.map((line, index) => (
      <div key={index}>{`${index%2===0 ? 'A' : 'B'}: ${line}`}</div>
    )))
  }
  
  useEffect(() => {
    getRandom();
  }, []);

  return (
    <Fragment>
      <div>Home</div>
      <button onClick={getRandom}>change</button>
      <div>{joke}</div>
    </Fragment>
  )
}

export default Home;