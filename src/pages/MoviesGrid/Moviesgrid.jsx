import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Moviesgrid = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlvdXJlbWFpbDE1MjNAZ21haWwuY29tIiwiaWF0IjoxNzExNzkwNDc2LCJleHAiOjE3MTE4NzY4NzZ9.eaMdBS7mBV_qtcNqSlRkcKzIDw6X5jwBXnlHZ9DALjU';
        
        const response = await axios.get('http://localhost:4000/user/movies', {
          headers: {
            Authorization: `Bearer ${bearerToken}`
          }
        });

        setMovies(response.data.movies);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!Array.isArray(movies) || movies.length === 0) {
    return <div>No movies found.</div>;
  }

  const displayedMovies = movies.slice(0, 8);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {displayedMovies.map(movie => (
              <div key={movie._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Link to={`/moviepage/${movie._id}`} className="block relative h-48 rounded overflow-hidden">
                  {movie.poster && <img alt={movie.title} className="object-cover object-center w-full h-full block" src={movie.poster} />}
                </Link>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{movie.genres.join(', ')}</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{movie.title}</h2>
                  <p className="mt-1">{movie.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Moviesgrid;