import React, { useState } from "react";
import { AppBar,Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authActions } from "../store";
axios.defaults.withCredentials = true;
const Header = () => {
  const dispatch=useDispatch();
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:3000/api/logout", null, {
      withCredentials: true,
    });
    if (res.status == 200) {
      return res;
    }
    return new Error("Unable TO Logout. Please try again");
  };
  const handleLogout = () => {
    sendLogoutReq().then(() => dispatch(authActions.logout()));
  };
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "brown" }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "black" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs  sx={{ ml: "auto" }}
            textColor="black"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            {!isLoggedIn && (<><Tab LinkComponent={NavLink} to="/login" label="Login" />
            <Tab LinkComponent={NavLink} to="/register" label="Register" /></>)}
            {isLoggedIn && (
                <Tab onClick={handleLogout} LinkComponent={NavLink} to="/logout" label="Logout" />)}{" "}
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;