// import React, { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setQuery(value);
//     onSearch(value); // Pass the query to the parent component for filtering
//   };

//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// };

// export default SearchBar;



import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const searchBarStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color:"brown",
    height: "100px",
  };

  const inputStyle = {
    padding: "10px",
    width: "300px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    outline: "none",
    color:"black",
  };

  return (
    <div style={searchBarStyle}>
      <input
        type="text"
        style={inputStyle}
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
