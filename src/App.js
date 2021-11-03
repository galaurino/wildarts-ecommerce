import logo from './logo.svg';
import {useState} from "react"
import './App.css';
import NavBar from './components/navBar/NavBar.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js'

function App() {

    const [flag, setFlag] = useState(true)
    const [id, setId] = useState(null)

    const cambiarFlag = () => {
      setFlag(!flag)
    }

    const setNewId = (i) => {
      setId(i)
    }

  return (
    <div className="App">
      <NavBar />
      {
        flag ?
        <ItemListContainer cambiarFlag={cambiarFlag} setNewId={setNewId} />
        :
        <ItemDetailContainer cambiarFlag={cambiarFlag} id={id} />
      }
      
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
