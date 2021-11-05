import logo from './logo.svg';
import {useState} from "react";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import './App.css';
import Home from './components/home/Home.js';
import NavBar from './components/navBar/NavBar.js';
import DataBase from './components/item/ItemProducts.js';
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
