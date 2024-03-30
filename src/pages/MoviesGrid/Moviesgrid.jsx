import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './loader.css';

const LoaderSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="loader-svg" viewBox="0 0 200 200"><radialGradient id="a12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stop-color="#132CFF"></stop><stop offset=".3" stop-color="#132CFF" stop-opacity=".9"></stop><stop offset=".6" stop-color="#132CFF" stop-opacity=".6"></stop><stop offset=".8" stop-color="#132CFF" stop-opacity=".3"></stop><stop offset="1" stop-color="#132CFF" stop-opacity="0"></stop></radialGradient><circle transform-origin="center" fill="none" stroke="url(#a12)" stroke-width="15" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transform-origin="center" fill="none" opacity=".2" stroke="#132CFF" stroke-width="15" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>
);

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
    // return <div>Loading...</div>;
    return <LoaderSVG/>;
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
  );
};

export default Moviesgrid;












// import React from 'react'
// import { Link } from 'react-router-dom'


// const Moviesgrid = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-wrap -m-4">
//             <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
//               <Link to="/moviepage" className="block relative h-48 rounded overflow-hidden">
//                 <img alt="Lord of the Rings" className="object-cover object-center w-full h-full block" src="https://c8.alamy.com/comp/2KG90H4/the-lord-of-the-rings-poster-2KG90H4.jpg" />
//               </Link>
//               <div className="mt-4">
//                 <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Fiction</h3>
//                 <h2 className="text-gray-900 title-font text-lg font-medium">Lord of Rings</h2>
//                 <p className="mt-1">2003</p>
//               </div>
//             </div>
//             {/* Repeat the same structure for other movie cards */}
//             <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
//               <Link to="/moviepage" className="block relative h-48 rounded overflow-hidden">
//                 <img alt="Dunki" className="object-cover object-center w-full h-full block" src="https://www.hindustantimes.com/ht-img/img/2023/11/04/550x309/dunki_1699090816204_1699090816432.jfif" />
//               </Link>
//               <div className="mt-4">
//                 <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Drama • Comedy</h3>
//                 <h2 className="text-gray-900 title-font text-lg font-medium">Dunki</h2>
//                 <p className="mt-1">2023</p>
//               </div>
//             </div>
//             {/* Repeat the same structure for other movie cards */}
//             <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
//               <Link to="/moviepage" className="block relative h-48 rounded overflow-hidden">
//                 <img alt="Article" className="object-cover object-center w-full h-full block" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/article-370-releases-in-theatres-on-february-23-233115195-16x9_0.jpg?VersionId=4tzt_Iu8C78_KIcfJ5bqRqmcVWJKVD.x" />
//               </Link>
//               <div className="mt-4">
//                 <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Action • Drama • Triller</h3>
//                 <h2 className="text-gray-900 title-font text-lg font-medium">Article</h2>
//                 <p className="mt-1">2024</p>
//               </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.redd.it/7lggpb97wc3c1.jpg"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Adventure • Drama • History</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Shogan</h2>
//           <p class="mt-1">2024</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://i.redd.it/7lggpb97wc3c1.jpg"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Adventure • Drama • History</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Shogan</h2>
//           <p class="mt-1">2024</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/article-370-releases-in-theatres-on-february-23-233115195-16x9_0.jpg?VersionId=4tzt_Iu8C78_KIcfJ5bqRqmcVWJKVD.x"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Action • Drama • Triller</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Article</h2>
//           <p class="mt-1">2024</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://c8.alamy.com/comp/2KG90H4/the-lord-of-the-rings-poster-2KG90H4.jpg"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Fiction</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Lord of Rings</h2>
//           <p class="mt-1">2003</p>
//         </div>
//       </div>
//       <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//         <a class="block relative h-48 rounded overflow-hidden">
//           <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://www.hindustantimes.com/ht-img/img/2023/11/04/550x309/dunki_1699090816204_1699090816432.jfif"/>
//         </a>
//         <div class="mt-4">
//           <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">Drama • Comedy</h3>
//           <h2 class="text-gray-900 title-font text-lg font-medium">Dunki</h2>
//           <p class="mt-1">2023</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default Moviesgrid



