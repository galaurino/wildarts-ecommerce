import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import './App.css';
import NavBar from './components/navBar/NavBar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';

function App() {

  const Category = () => {
    const { id } = useParams();
  }

  return (
    <div className="App">
      <BrowserRouter>
       <NavBar />
        <Switch>

          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
