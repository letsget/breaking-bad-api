import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {loadCharacters} from './actions/App';
import "./App.css";
import Header from "./components/UI/Header";
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search'

function App() {
  const dispatch = useDispatch();
  const searchKey = useSelector(({app: {searchKey}}) => searchKey);

useEffect(() => {
   loadCharacters(dispatch, searchKey);
}, [dispatch, searchKey])


  return (
    <div className="container">
      <Header />
      <Search />
      <CharacterGrid />
    </div>
  );
}

export default App;
