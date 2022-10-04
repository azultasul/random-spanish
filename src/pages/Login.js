import React, { Fragment, useState } from "react";
import { createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authService } from "../util/fbase";

import Modal from '../layout/Modal';

const Login = () => {
  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [emailSignFormIsOpend, setEmailSignFormIsOpend] = useState(false);
  const [error, setError] = useState('');
  // const [googleSignFormIsOpend, setGoogleSignFormIsOpend] = useState(false);

  const onChange = (event, type) => {
    const {target: {name, value}} = event;
    if (name === 'email') {
      (type === 'login') && setLogInEmail(value);
      (type === 'signin') && setSignInEmail(value);
    } else if (name === 'password') {
      (type === 'login') && setLogInPassword(value);
      (type === 'signin') && setSignInPassword(value);
    }
  }

  const onLogInSubmit = (event) => {
    event.preventDefault();
  }

  const showEmailSignForm = () => {
    setEmailSignFormIsOpend(true);
  }
  const signInSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(authService, signInEmail, signInPassword);
      setError('');
    } catch (error) {
      const code = error.code;
      const message = error.message;
      console.log("error", error, "++", message, code);
      setError(error.code);
      // error Firebase: Password should be at least 6 characters (auth/weak-password). + auth/weak-password
      // error Firebase: Error (auth/email-already-in-use). + auth/email-already-in-use
    }
  }
  const showGoogleSignForm = async () => {
    const provider = new GoogleAuthProvider();  
    await signInWithPopup(authService, provider);
  }

  return (
    <div>
      <form onSubmit={onLogInSubmit}>
        <input type="email" name="email" placeholder="email" required value={logInEmail} onChange={(event) => {onChange(event, 'login')}}/>
        <input type="password" name="password" placeholder="password" required value={logInPassword} onChange={(event) => {onChange(event, 'login')}}/>
        <input type="submit" value="로그인" />
      </form>
      <button onClick={showEmailSignForm}>email로 가입</button>
      <button onClick={showGoogleSignForm}>Google로 가입</button>

      {emailSignFormIsOpend && <Modal>{
        <Fragment>
          <form onSubmit={signInSubmit}>
            <input type="email" name="email" placeholder="email" required value={signInEmail} onChange={(event) => {onChange(event, 'signin')}}/>
            <input type="password" name="password" placeholder="password" required value={signInPassword} onChange={(event) => {onChange(event, 'signin')}}/>
            <input type="submit" value="회원가입" />
          </form>
          {error && <div>{error}</div>}
        </Fragment>
      }</Modal>}
    </div>
  )
}

export default Login;