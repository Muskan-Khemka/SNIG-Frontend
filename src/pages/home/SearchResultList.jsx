import "./SearchResultList.css";
import { SearchResult } from "./SearchResult";

export const SearchResultList = ({ results,textColor }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.title} key={id} style={{color: "black"}} />;
      })}
    </div>
  );
};
