import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home/home";
import Login from "../../pages/login/login";
import { auth } from "../../services/firebase/firebase";
import { useEffect, useState } from "react";



function Routes() {
  const [user, setUser] = useState(null);
useEffect(() => {
  auth.onAuthStateChanged((userAuth) => {
    const user = {
      uid: userAuth?.uid,
      email: userAuth?.email,
    };
    if (userAuth) setUser(user);
    else setUser(null);
  });
}, []);
  
  return (
      user ?
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      : <Login/>
    );
  
}

export default Routes;
