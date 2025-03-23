import "./App.css";

function SearchBar({ searchTerm, onSearch, onClear }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Ieskoti pagal varda..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
      {searchTerm && (
        <button className="clear-button" onClick={onClear}>
          Valyti paieska
        </button>
      )}
    </div>
  );
}
export default SearchBar;
