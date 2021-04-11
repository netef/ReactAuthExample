import React, { useRef } from "react";
import "./login.css";
import { auth } from "../../services/firebase/firebase";
import { Redirect } from "react-router-dom";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  function signUp(event) {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert("works");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }
  function signIn(event) {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        alert("Signed in");
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <form>
      <label>
        Email:
        <input ref={emailRef} type="email" />
      </label>
      <label>
        Password:
        <input ref={passwordRef} type="password" />
      </label>
      <button onClick={signUp}>SignUp</button>
      <button onClick={signIn}>SignIn</button>
    </form>
  );
};

export default Login;
