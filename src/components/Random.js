import React, { useState, useEffect, Fragment } from "react";
import Loading from './Loading';

const Random = () => {
  const [init, setInit] = useState(false);
  const [joke, setJoke] = useState();
  const getRandom = async () => {
    setInit(false);
    const response = await fetch('https://palabras-aleatorias-public-api.herokuapp.com/joke/random');
    const data = await response.json();
    const lines = data.body.lines;
    
    setJoke(lines.map((line, index) => (
      <div key={index}>{`${index%2===0 ? 'A' : 'B'}: ${line}`}</div>
    )))
    setInit(true);
  }
  
  useEffect(() => {
    getRandom();
  }, []);

  return (
    <Fragment>
      <div>Random</div>
      <button onClick={getRandom}>change</button>
      <div>{init ? joke : <Loading />}</div>
    </Fragment>
  )
}

export default Random;