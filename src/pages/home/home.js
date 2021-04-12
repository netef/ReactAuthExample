import { auth } from "../../services/firebase/firebase";
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
}

export default Home;
