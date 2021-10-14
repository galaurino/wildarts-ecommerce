import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar.js'
import {ItemListContainer} from './components/itemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hello Earthlings!" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          By <code>Giuliana Laurino</code> for CoderHouse.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
