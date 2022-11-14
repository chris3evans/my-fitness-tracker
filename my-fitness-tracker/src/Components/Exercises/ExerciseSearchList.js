const ExerciseSearchList = function (props) {
  const selectSearchResultHandler = function (event) {
    props.clickedSearchResult(event.target.innerText);
    props.showSearchResults(true);
  };

  return (
    <ul className="search-list">
      {props.searchResults.map((result) => {
        return (
          <li
            key={result}
            onClick={selectSearchResultHandler}
            className="search-list-item"
          >
            <h3 className="search-list-text">{result}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default ExerciseSearchList;
