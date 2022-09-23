import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authService } from "../util/fbase";

import Modal from '../layout/Modal';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailSignformIsOpend, setEmailSignformIsOpend] = useState(false);
  const [googleSignformIsOpend, setGoogleSignformIsOpend] = useState(false);


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

  const showSignForm = (param, e) => {
    if ( param === 'email') {
      console.log("email");
      setEmailSignformIsOpend(true);
    } else if (param === 'google') {
      console.log("google");
      setGoogleSignformIsOpend(true);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" value={email} onChange={onChange} placeholder="email" required/>
        <input type="password" value={password} onChange={onChange} placeholder="password" required/>
        <input type="submit" value="로그인" />
      </form>
      <button onClick={() => {showSignForm('email')}}>email로 가입</button>
      <button onClick={() => {showSignForm('google')}}>Google로 가입</button>
      {emailSignformIsOpend && <Modal>{
        <form onSubmit={onSubmit}>
          <input type="email" value={email} onChange={onChange} placeholder="email" required/>
          <input type="password" value={password} onChange={onChange} placeholder="password" required/>
          <input type="submit" value="회원가입" />
        </form>
      }</Modal>}
    </div>
  )
}

export default Login;