// import { Button, Typography, Box } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div>
//       <Box display="flex" flexDirection="column" alignItems="center">
//         <Button
//           LinkComponent={Link}
//           to="/login"
//           sx={{ marginTop: 15, background: "black" }}
//           variant="contained"
//         >
//           <Typography variant="h3">View All products</Typography>
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default Home;
import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight:"90vh",
    minWidth:"90vw",
    backgroundImage: `url("https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Online-libraries-in-UAE-B-13-09.jpg")`,
    backgroundSize:"cover",
    backgroundPosition: "center",
  };

  const buttonStyles = {
    marginTop: "20",
    backgroundColor: "brown",
    color: "#fff",
    "&:hover": {
      backgroundColor: "black",
    },
  };

  const typographyStyles = {
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <Box>
        <Button
          component={Link}
          to="/login"
          sx={buttonStyles}
          variant="contained"
        >
          <Typography variant="h3" style={typographyStyles}>
            View All Products
          </Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
