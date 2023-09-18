import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store";

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:3000/api/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=>dispatch(authActions.login()))
      .then(() => history("/books"));
  };
    const containerStyles = {
      background: `url("https://goodlifefamilymag.com/wp-content/uploads/2018/08/Stack-of-colorful-books.-Education-background.-Back-to-school.-Book-hardback-colorful-books-on-wooden-table.-Education-business-concept.-Copy-space-for-text-700268816_3877x2585-1024x683.jpeg")`, // Set the background image
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "90vh",
      minWidth:"90vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "centre",    
  };
  return (
    <div>
      <div style={containerStyles}>
      <form onSubmit={handleSubmit}>
        <Box 
          marginLeft="auto"
          marginRight="auto"
          width={300}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h2">Login</Typography>

          <TextField
            name="email"
            onChange={handleChange}
            type={"email"}
            value={inputs.email}
            variant="outlined"
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            type="password"
            value={inputs.password}
            variant="outlined"
            placeholder="Password"
            margin="normal"
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Box>
      </form>
    </div>
  </div>
  );
};

export default Login;