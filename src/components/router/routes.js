import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/login";
import { auth, firestore } from "../../services/firebase/firebase";
import { useEffect, useState } from "react";



function Routes() {
  const [user, setUser] = useState(null);
useEffect(() => {
  auth.onAuthStateChanged((userAuth) => {
    const user = {
      uid: userAuth?.uid,
      email: userAuth?.email,
    };
    if (userAuth)
      firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then((value) => setUser(value.data()));
    //setUser(user);
    else setUser(null);
  });
}, []);
  console.log(user);
  return user ? (
    <Switch>
      <Route path="/" exact >
        <Home user={user}/>
      </Route>
    </Switch>
  ) : (
    <Login />
  );
  
}

export default Routes;
