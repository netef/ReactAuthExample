import React, { useRef } from "react";
import "./login.css";
import { auth } from "../../services/firebase/firebase";

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
        alert("Signed up " + user.email);
        // ...
      })
      .catch((error) => {
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
        alert("Signed in" + user.email);
        // ...
      })
      .catch((error) => {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <div>
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
    </div>
  );
};

export default Login;
