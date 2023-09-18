// import React from "react";

// const AboutUs = () => {
//   const containerStyles = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     background: "#f7f7f7",
//   };

//   const contentStyles = {
//     backgroundColor: "#fff",
//     boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//     padding: "30px",
//     borderRadius: "10px",
//     textAlign: "center",
//     maxWidth: "800px",
//   };

//   const headerStyles = {
//     fontSize: "36px",
//     color: "#333",
//     marginBottom: "20px",
//   };

//   const paragraphStyles = {
//     fontSize: "18px",
//     color: "#555",
//     lineHeight: "1.5",
//     marginBottom: "20px",
//   };

//   const linkStyles = {
//     color: "#007BFF",
//     textDecoration: "none",
//     fontWeight: "bold",
//   };

//   const socialMediaStyles = {
//     marginTop: "20px",
//   };

//   return (
//     <div style={containerStyles}>
//       <div style={contentStyles}>
//         <h1 style={headerStyles}>About Us</h1>
//         <p style={paragraphStyles}>
//           Welcome to our Book Search website! We are passionate about books and
//           dedicated to helping you find your next great read.
//         </p>

//         <h2 style={headerStyles}>Our Mission</h2>
//         <p style={paragraphStyles}>
//           Our mission is to connect book enthusiasts with their next favorite
//           book. We believe in the power of literature to inspire, educate, and
//           entertain.
//         </p>

//         <h2 style={headerStyles}>Our Team</h2>
//         <p style={paragraphStyles}>
//           Meet our dedicated team of book lovers, developers, and designers who
//           work tirelessly to make your book search experience seamless and
//           enjoyable.
//         </p>

//         <h2 style={headerStyles}>Contact Us</h2>
//         <p style={paragraphStyles}>
//           Have questions or feedback? We'd love to hear from you! Contact us at{" "}
//           <a href="mailto:contact@example.com" style={linkStyles}>
//             contact@example.com
//           </a>{" "}
//           for inquiries and suggestions.
//         </p>

//         <div style={socialMediaStyles}>
//           <h2 style={headerStyles}>Follow Us</h2>
//           <a
//             href="https://twitter.com/booksearch"
//             style={{ ...linkStyles, marginRight: "10px" }}
//           >
//             Twitter
//           </a>
//           <a
//             href="https://facebook.com/booksearch"
//             style={{ ...linkStyles, marginRight: "10px" }}
//           >
//             Facebook
//           </a>
//           <a href="https://instagram.com/booksearch" style={linkStyles}>
//             Instagram
//           </a>
//         </div>

//         <p style={paragraphStyles}>
//           Thank you for choosing Book Search for your reading adventures. Happy
//           reading!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;



import React, { useEffect, useRef } from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const AboutUs = () => {
  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:'url(""https://cdn2.hubspot.net/hubfs/145335/best-about-us-pages.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const contentStyles = {
    backgroundColor: "#fff",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    padding: "30px",
    borderRadius: "10px",
    textAlign: "center",
    maxWidth: "800px",
  };
  const mainHeaderstyles={
    fontSize:"40px",
    color: "#333",
    marginBottom: "20px",
  }

  const headerStyles = {
    fontSize: "32px",
    color: "#333",
    marginBottom: "20px",
  };

  const paragraphStyles = {
    fontSize: "18px",
    color: "#555",
    lineHeight: "1.5",
    marginBottom: "20px",
  };

  const linkStyles = {
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const socialMediaStyles = {
    marginTop: "20px",
  };

  const socialIconStyles = {
    fontSize: "24px",
    marginRight: "10px",
    color: "#007BFF",
  };
  const scrollingImagesContainerStyles = {
    overflow: "auto",
    whiteSpace: "nowrap",
  };
  const scrollingContainerRef = useRef(null);
  const scrollImages = () => {
    const container = scrollingContainerRef.current;
    if (container) {
      container.scrollLeft += 2;
    }
  };
  useEffect(() => {
    const scrollInterval = setInterval(scrollImages, 50); 
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
      <div style={scrollingImagesContainerStyles}
      ref={scrollingContainerRef}>
        <div style={{ display: "inline-block", whiteSpace: "nowrap" }}></div>
          <img
            src="https://cdn2.hubspot.net/hubfs/145335/best-about-us-pages.jpg"
            alt="Image 1"
            style={{ width: "500px", margin: "10px" }}
          />
          <img
            src="https://thumbs.dreamstime.com/b/cheerful-crowd-cheering-hands-up-white-background-silhouette-illustrator-144719997.jpg"
            alt="Image 2"
            style={{ width: "500px", margin: "10px" }}
          />
          <img
            src="https://images.pexels.com/photos/8421662/pexels-photo-8421662.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Image 3"
            style={{ width: "500px", margin: "10px" }}
          />

        </div>
        <h1 style={mainHeaderstyles}>About Us</h1>
        <p style={paragraphStyles}>
          Welcome to our Book Search website! We are passionate about books and dedicated to helping you find your next great read.
        </p>

        <h3 style={headerStyles}>Our Mission</h3>
        <p style={paragraphStyles}>
          Our mission is to connect book enthusiasts with their next favorite
          book. We believe in the power of literature to inspire, educate, and
          entertain.
        </p>

        <h3 style={headerStyles}>Our Team</h3>
        <p style={paragraphStyles}>
          Meet our dedicated team of book lovers, developers, and designers who
          work tirelessly to make your book search experience seamless and
          enjoyable.
        </p>

        <h3 style={headerStyles}>Contact Us</h3>
        <p style={paragraphStyles}>
          Have questions or feedback? We'd love to hear from you! Contact us at{" "}
          <a href="mailto:BiblioSearch@gmail.com" style={linkStyles}>
            BiblioSearch@gmail.com
          </a>{" "}
          for inquiries and suggestions.
        </p>

        <div style={socialMediaStyles}>
          <h3 style={headerStyles}>Follow Us</h3>
          <a href="https://twitter.com/booksearch" style={linkStyles}>
            <FaTwitter style={socialIconStyles} />
            Twitter
          </a>
          <a href="https://facebook.com/booksearch" style={linkStyles}>
            <FaFacebook style={socialIconStyles} />
            Facebook
          </a>
          <a href="https://instagram.com/booksearch" style={linkStyles}>
            <FaInstagram style={socialIconStyles} />
            Instagram
          </a>
        </div>
      

        <p style={paragraphStyles}>
          Thank you for choosing Book Search for your reading adventures. Happy
          reading!
        </p>
        
 
      </div>
    </div>
  );
};

export default AboutUs;
