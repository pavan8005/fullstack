import React, { useState, useEffect } from "react";
import "./MovieList.css";

const MovieList = () => {

  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem("movies");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
          { id: 2, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 },
          { id: 3, title: "The Dark Knight", genre: "Action", rating: 9.0 },
        ];
  });

  const [newMovie, setNewMovie] = useState({ title: "", genre: "", rating: "" });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };


  const addMovie = () => {
    if (newMovie.title && newMovie.genre && newMovie.rating) {
      const movieToAdd = {
        id: Date.now(),
        title: newMovie.title,
        genre: newMovie.genre,
        rating: parseFloat(newMovie.rating),
      };
      setMovies([...movies, movieToAdd]);
      setNewMovie({ title: "", genre: "", rating: "" });
    }
  };


  const removeMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="container">
      <h1 className="heading">🎬 Movie Collection</h1>

      {/* Add Movie Form */}
      <div className="form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newMovie.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={newMovie.genre}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={handleChange}
        />
        <button onClick={addMovie} className="add-btn">
          Add
        </button>
      </div>

      {/* Movie Cards */}
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <p>Genre: {movie.genre}</p>
            <p>⭐ {movie.rating}</p>
            <button onClick={() => removeMovie(movie.id)} className="remove-btn">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
