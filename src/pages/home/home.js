import { auth } from "../../services/firebase/firebase";
import React, { Component } from "react";

export class Home extends Component {
  render() {
    const { user } = this.props;
    console.log(this.props);
    return (
      <div>
        <h1>Home Page</h1>
        <h2>{user.name + " " + user.age + " " + user.job}</h2>
        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    );
  }
}


export default Home;
