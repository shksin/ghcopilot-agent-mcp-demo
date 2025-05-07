import React, { useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState('');

  const addMovie = () => {
    if (movieName.trim()) {
      setMovies([...movies, movieName.trim()]);
      setMovieName('');
    }
  };

  const removeMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Movie Names List</h1>
      <div>
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Enter movie name"
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie} <button onClick={() => removeMovie(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
