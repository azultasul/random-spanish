import React, { useState } from "react";
import { authService } from "../util/fbase";

const Auth = () => {
  console.log("auth", authService);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onChange = (event) => {
    const {target: {name, value}} = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" value={email} onChange={onChange} placeholder="email" required/>
        <input type="password" value={password} onChange={onChange} placeholder="password" required/>
        <input type="submit" placeholder="로그인" />
      </form>
      <button>email로 가입</button>
      <button>Google로 가입</button>
    </div>
  )
}

export default Auth;