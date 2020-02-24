import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import ServerList from './components/ServerList'

function App() {
  return (
    <div className="App">
      <SearchForm />
      <ServerList />
    </div>
  );
}

export default App;
