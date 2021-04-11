import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Routes from "./components/router/routes";

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes />
      </main>
    </div>
  );
}

export default App;
