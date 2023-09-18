// // import React, { useEffect, useState } from "react";
// // import "./Book.css";
// // import axios from "axios";
// // import Book from "./Book";
// // const URL = "http://localhost:3000/books";
// // const fetchHandler = async () => {
// //   return await axios.get(URL).then((res) => res.data);
// // };
// // const Books = () => {
// //   const [books, setBooks] = useState();
// //   useEffect(() => {
// //     fetchHandler().then((data) => setBooks(data.books));
// //   }, []);
// //   console.log(books);
// //   return (
// //     <div>
// //       <ul>
// //         {books &&
// //           books.map((book, i) => (
// //             <li key={i}>
// //               <Book book={book} />
// //             </li>
// //           ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Books;

// // Books.js
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Book from "./Book.js";
// // import SearchBar from "./SearchBar.js";
// // const Books = () => {
// //   const [books, setBooks] = useState([]);
// //   const [filteredBooks, setFilteredBooks] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("http://localhost:3000/books")
// //       .then((response) => {
// //         setBooks(response.data.books);
// //         setFilteredBooks(response.data.books);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching data from the backend:", error);
// //       });
// //   }, []);

// //   // Update the handleSearch function to handle undefined book titles
// //   const handleSearch = (query) => {
// //     const filtered = books.filter((book) =>
// //       book.name && book.name.toLowerCase().includes(query.toLowerCase())
// //     );
// //     setFilteredBooks(filtered);
// //   };

// //   return (
// //     <div>
// //       <h1>Book Search</h1>
// //       <SearchBar onSearch={handleSearch} />
// //       <ul>
// //         {filteredBooks &&
// //           filteredBooks.map((book, i) => (
// //             <li key={i}>
// //               <Book book={book} />
// //             </li>
// //           ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Books;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Book from "./Book.js";
// import SearchBar from "./SearchBar.js";

// const Books = () => {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/books")
//       .then((response) => {
//         setBooks(response.data.books);
//         setFilteredBooks(response.data.books);
//       })
//       .catch((error) => {
//         console.error("Error fetching data from the backend:", error);
//       });
//   }, []);

//   // Update the handleSearch function to handle undefined book titles
//   const handleSearch = (query) => {
//     const filtered = books.filter(
//       (book) =>
//         (book.name && book.name.toLowerCase().includes(query.toLowerCase())) ||
//         (book.author && book.author.toLowerCase().includes(query.toLowerCase()))
//     );
//     setFilteredBooks(filtered);
//   };

//   const pageStyles = {
//     backgroundImage: `url('https://cdn.wallpapersafari.com/38/1/0cViZ4.jpg')`, // Replace with your background image URL
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     minHeight: "100vh", // Adjust the height as needed
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const h1Styles = {
//     color: "black", // Text color
//     fontSize: "32px", // Text size
//     textAlign: "center",
//   };

//   return (
//     <div style={pageStyles}>
//       <h1 style={h1Styles}>Book Search</h1>
//       <SearchBar onSearch={handleSearch} />
//       <ul>
//         {filteredBooks &&
//           filteredBooks.map((book, i) => (
//             <li key={i}>
//               <Book book={book} />
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Books;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Book from "./Book.js";
// import SearchBar from "./SearchBar.js";
// import Wishlist from "./Wishlist.js";

// const Books = () => {
//   const [books, setBooks] = useState([]);
//   const [filteredBooks, setFilteredBooks] = useState([]);
//   const [wishlist, setWishlist] = useState([]);
//   const [searchResults, setSearchResults] = useState([]); // This is just a placeholder for search results

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/books")
//       .then((response) => {
//         setBooks(response.data.books);
//         setFilteredBooks(response.data.books);
//       })
//       .catch((error) => {
//         console.error("Error fetching data from the backend:", error);
//       });
//   }, []);

//   // Update the handleSearch function to handle undefined book titles
//   const handleSearch = (query) => {
//     const filtered = books.filter(
//       (book) =>
//         (book.name && book.name.toLowerCase().includes(query.toLowerCase())) ||
//         (book.author && book.author.toLowerCase().includes(query.toLowerCase()))
//     );
//     setFilteredBooks(filtered);
//   };
//   const addToWishlist = (book) => {
//     setWishlist([...wishlist, book]);
//   };


//   const pageStyles = {
//     backgroundImage: `url('https://cdn.wallpapersafari.com/38/1/0cViZ4.jpg')`, // Replace with your background image URL
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     minHeight: "100vh", // Adjust the height as needed
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   const h1Styles = {
//     color: "black", // Text color
//     fontSize: "32px", // Text size
//     textAlign: "center",
//   };

//   return (
//     <div style={pageStyles}>
//       <h1 style={h1Styles}>Book Search</h1>
//       <SearchBar onSearch={handleSearch} />
//       <ul>
//         {filteredBooks &&
//           filteredBooks.map((book, i) => (
//             <li key={i}>
//               <Book book={book} />
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default Books;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book.js";
import SearchBar from "./SearchBar.js";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        setBooks(response.data.books);
        setFilteredBooks(response.data.books);
      })
      .catch((error) => {
        console.error("Error fetching data from the backend:", error);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = books.filter(
      (book) =>
        (book.name &&
          book.name.toLowerCase().includes(query.toLowerCase())) ||
        (book.author &&
          book.author.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredBooks(filtered);
  };

  const addToWishlist = (book) => {
    if (!wishlist.some((item) => item.id === book.id)) {
      setWishlist([...wishlist, book]);
    }
  };

  const pageStyles = {
    backgroundImage: `url('https://cdn.wallpapersafari.com/38/1/0cViZ4.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const h1Styles = {
    color: "black",
    fontSize: "32px",
    textAlign: "center",
  };

  return (
    <div style={pageStyles}>
      <h1 style={h1Styles}>Book Search</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {filteredBooks &&
          filteredBooks.map((book, i) => (
            <li key={i}>
              <Book
                book={book}
                onAddToWishlist={() => addToWishlist(book)}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;
