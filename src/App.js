import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Description from './components/Description';
import Menu from './components/Menu';

function App() {
  const [title, setTitle] = useState('');
  const [rate, setRate] = useState('');
  const [movies, setMovies] = useState([]); 

  // On récupère la liste des films de Home.js
  const handleLoadMovies = loadedMovies => {
    setMovies(loadedMovies);
  };
    
  return (
    <div className="App bg-light mb-5">
      <Menu
        onFilter={({ title, rate }) => {
          setTitle(title);
          setRate(rate);
        }}
      />
      <Routes>
        <Route
          path="/" element={<Home onLoadMovies={handleLoadMovies} titleFilter={title} rateFilter={rate} />} />
        <Route path="/movie/:id" element={<Description movies={movies} />} />
      </Routes>
    </div>
  );
}

export default App;
