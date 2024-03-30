// import React, { useState } from "react";

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     title: "",
//     plot: "",
//     genre: "",
//     runtime: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleRuntimeChange = (e) => {
//     const { value } = e.target;
//     // Ensure only integer values are entered for runtime
//     if (!isNaN(value) || value === "") {
//       setFormData({ ...formData, runtime: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMovies([...movies, formData]);
//     setFormData({ title: "", plot: "", genre: "", runtime: "" });
//     setShowForm(false);
//   };

//   return (
//     <div>
//       <h1>Movies</h1>
//       <button onClick={() => setShowForm(true)}>Add a new movie</button>

//       {showForm && (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleInputChange}
//             placeholder="Title"
//             required
//           />
//           <input
//             type="text"
//             name="plot"
//             value={formData.plot}
//             onChange={handleInputChange}
//             placeholder="Plot"
//             required
//           />
//           <input
//             type="text"
//             name="genre"
//             value={formData.genre}
//             onChange={handleInputChange}
//             placeholder="Genre"
//             required
//           />
//           <input
//             type="number"
//             name="runtime"
//             value={formData.runtime}
//             onChange={handleRuntimeChange}
//             placeholder="Runtime"
//             required
//           />
//           <button type="submit">Save</button>
//         </form>
//       )}

//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Plot</th>
//             <th>Genre</th>
//             <th>Runtime</th>
//           </tr>
//         </thead>
//         <tbody>
//           {movies.map((movie, index) => (
//             <tr key={index}>
//               <td>{movie.title}</td>
//               <td>{movie.plot}</td>
//               <td>{movie.genre}</td>
//               <td>{movie.runtime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [users, setUsers] = useState([]);
  const [showMovieForm, setShowMovieForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showSearchUser, setShowSearchUser] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    plot: "",
    genre: "",
    runtime: "",
  });
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
  });
  const [editMovieIndex, setEditMovieIndex] = useState(null);
  const [editUserIndex, setEditUserIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);

  const handleMovieInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleRuntimeChange = (e) => {
    const { value } = e.target;
    // Ensure only integer values are entered for runtime
    if (!isNaN(value) || value === "") {
      setFormData({ ...formData, runtime: value });
    }
  };

  const handleMovieSubmit = (e) => {
    e.preventDefault();
    if (editMovieIndex === null) {
      // Add new movie
      setMovies([...movies, formData]);
    } else {
      // Edit existing movie
      const updatedMovies = [...movies];
      updatedMovies[editMovieIndex] = formData;
      setMovies(updatedMovies);
      setEditMovieIndex(null); // Reset editMovieIndex after editing
    }
    setFormData({ title: "", plot: "", genre: "", runtime: "" });
    setShowMovieForm(false);
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    if (editUserIndex === null) {
      // Add new user
      setUsers([...users, userFormData]);
    } else {
      // Edit existing user
      const updatedUsers = [...users];
      updatedUsers[editUserIndex] = userFormData;
      setUsers(updatedUsers);
      setEditUserIndex(null); // Reset editUserIndex after editing
    }
    setUserFormData({ firstName: "", lastName: "", emailId: "" });
    setShowUserForm(false);
  };

  const handleEditMovie = (index) => {
    setEditMovieIndex(index);
    setShowMovieForm(true);
    setFormData(movies[index]);
  };

  const handleEditUser = (index) => {
    setEditUserIndex(index);
    setShowUserForm(true);
    setUserFormData(users[index]);
  };

  const handleDeleteMovie = (index) => {
    const updatedMovies = [...movies];
    updatedMovies.splice(index, 1);
    setMovies(updatedMovies);
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleSearchUser = () => {
    setShowSearchUser(true);
    setSearchedUsers(
      users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.emailId.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const handleClearSearch = () => {
    setShowSearchUser(false);
    setSearchQuery("");
    setSearchedUsers([]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4 mb-8">
        <h1 className="text-white text-2xl text-center">Admin Panel</h1>
      </header>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-4"
            onClick={() => setShowMovieForm(true)}
          >
            Add a New Movie
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-4"
            onClick={handleSearchUser}
          >
            Search User
          </button>
        </div>

        {showMovieForm && (
          <form onSubmit={handleMovieSubmit} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleMovieInputChange}
                  placeholder="Title"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="plot">
                  Plot
                </label>
                <input
                  type="text"
                  name="plot"
                  value={formData.plot}
                  onChange={handleMovieInputChange}
                  placeholder="Plot"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="genre">
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleMovieInputChange}
                  placeholder="Genre"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700" htmlFor="runtime">
                  Runtime
                </label>
                <input
                  type="number"
                  name="runtime"
                  value={formData.runtime}
                  onChange={handleRuntimeChange}
                  placeholder="Runtime"
                  className="border border-gray-300 rounded px-4 py-2 w-full"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            >
              {editMovieIndex === null ? "Save" : "Update"}
            </button>
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
              onClick={() => setShowMovieForm(false)}
            >
              Cancel
            </button>
          </form>
        )}

        {showSearchUser && (
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search user to edit/delete"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
            <button
              onClick={handleSearchUser}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-4"
            >
              Search
            </button>
            <button
              onClick={handleClearSearch}
              className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Clear
            </button>
            <div className="mt-4">
              <h2 className="text-xl font-bold">Search Results:</h2>
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 bg-blue-500 text-white">
                      First Name
                    </th>
                    <th className="px-4 py-2 bg-blue-500 text-white">
                      Last Name
                    </th>
                    <th className="px-4 py-2 bg-blue-500 text-white">
                      Email ID
                    </th>
                    <th className="px-4 py-2 bg-blue-500 text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {searchedUsers.map((user, index) => (
                    <tr
                      key={index}
                      className={(index + 1) % 2 === 0 ? "bg-gray-100" : ""}
                    >
                      <td className="border px-4 py-2">{user.firstName}</td>
                      <td className="border px-4 py-2">{user.lastName}</td>
                      <td className="border px-4 py-2">{user.emailId}</td>
                      <td className="border px-4 py-2">
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
                          onClick={() => handleEditUser(users.indexOf(user))}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                          onClick={() => handleDeleteUser(users.indexOf(user))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-8">
          <h2 className="text-2xl mb-4">Movies</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-blue-500 text-white">Title</th>
                <th className="px-4 py-2 bg-blue-500 text-white">Plot</th>
                <th className="px-4 py-2 bg-blue-500 text-white">Genre</th>
                <th className="px-4 py-2 bg-blue-500 text-white">Runtime</th>
                <th className="px-4 py-2 bg-blue-500 text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr
                  key={index}
                  className={(index + 1) % 2 === 0 ? "bg-gray-100" : ""}
                >
                  <td className="border px-4 py-2">{movie.title}</td>
                  <td className="border px-4 py-2">{movie.plot}</td>
                  <td className="border px-4 py-2">{movie.genre}</td>
                  <td className="border px-4 py-2">{movie.runtime}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => handleEditMovie(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDeleteMovie(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
