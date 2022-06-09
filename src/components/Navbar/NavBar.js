import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import NavLinks from "./NavLinks";
import MenuIcon from "@mui/icons-material/Menu";
import Sidedrawer from "./Sidedrawer";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <>
      <Sidedrawer tDrawer={toggleDrawer} st={state} />
      <AppBar
        position="static"
        sx={{ height: "80px", backgroundColor: "#000000" }}
      >
        <Toolbar
          style={{
            backgroundColor: "#000000",
            opacity: "0.95",
            height: "80px",
          }}
        >
          {!isMobile ? (
            <IconButton
              onClick={toggleDrawer(true)}
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              edge="start"
            >
              <MenuIcon></MenuIcon>
            </IconButton>
          ) : null}
          {isMobile ? (
            <Typography variant="h3" style={{ flexGrow: 1 }}>
              FACE
            </Typography>
          ) : (
            <Typography variant="h3" style={{ margin: "auto" }}>
              FACE
            </Typography>
          )}
          {isMobile ? <NavLinks /> : null}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
