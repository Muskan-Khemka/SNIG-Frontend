import React from "react";
import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  const handleClick = () => {
    const movieTitle = result;
    // Assuming you have a route for movie pages like "/movies/:title"
    // Replace ":title" with the actual title of the movie
    window.location.href = `/moviepage`;
  };

  return (
    <div className="search-result" onClick={handleClick}>
      {result}
    </div>
  );
};
