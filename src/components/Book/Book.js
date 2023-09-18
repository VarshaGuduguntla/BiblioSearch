// import { Button } from "@mui/material";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import "./Book.css";
// const Book = (props) => {
//   const history = useNavigate();
//   const { _id, name, author, description, price, image } = props.book;
//   const deleteHandler = async () => {
//     await axios
//       .delete(`http://localhost:3000/books/${_id}`)
//       .then((res) => res.data)
//       .then(() => history("/"))
//       .then(() => history("/books"));
//   };
//   const cardStyles = {
    
//     color:"black",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundImage:`url(https://cdn.wallpapersafari.com/77/56/LuJVUb.jpg)`
//     // Add any other styles as needed
//   };

//   return (
    
//     <div className="card" style={cardStyles}>
//       <img src={image} alt={name} />
//       <article>By {author}</article>
//       <h3>{name}</h3>
//       <p>{description}</p>
//       <h3>Rs {price}</h3>
//       <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
//         Update
//       </Button>
//       <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
//         Delete
//       </Button>
//     </div>
//   );
// };

// export default Book;


import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  const addToWishlist = () => {
    alert(`Added "${name}" to your wishlist!`);
  };

  const cardStyles = {
    color: "black",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(https://cdn.wallpapersafari.com/77/56/LuJVUb.jpg)`,
  };

  return (
    <div className="card" style={cardStyles}>
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
      <Button onClick={addToWishlist} sx={{ mt: "auto" }}>
        Add to Wishlist
      </Button>
    </div>
  );
};

export default Book;
