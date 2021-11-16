import logo from './logo.svg';
import './App.css';
import Navigationbar from './component/navigationbar';
import RoutesPage from "./component/router";

function App() {
  return (
    <>
    <Navigationbar />
    <RoutesPage />
    <h1>React Router Task</h1>
        <h2>HOME PAGE</h2>
      <header className="App-header">
        <h1>React Router Task</h1>
        <h2>HOME PAGE</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
    </>
  );
}

export default App;
