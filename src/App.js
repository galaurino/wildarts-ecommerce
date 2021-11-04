import logo from './logo.svg';
import {useState} from "react";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import './App.css';
import Home from './components/home/Home.js';
import NavBar from './components/navBar/NavBar.js';
import DataBase from './components/item/ItemProducts.js';
import Category from './components/category/Category.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';

function App() {

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
