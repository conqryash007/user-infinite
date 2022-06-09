import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./../../shared/context/auth-context";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

// ICONS
import CloseIcon from "@mui/icons-material/Close";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

export default function TemporaryDrawer(props) {
  const auth = React.useContext(AuthContext);

  const list = () => (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #00f260, #0575e6)",
        height: "100vh",
        opacity: 0.8,
      }}
      role="presentation"
      onClick={props.tDrawer(false)}
      onKeyDown={props.tDrawer(false)}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <CloseIcon />
            </ListItemIcon>
            <ListItemText>close</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <NavLink to="/">
              <ListItemText color="inherit">LOGIN PAGE</ListItemText>
            </NavLink>
          </ListItemButton>
        </ListItem>
        {auth.isLoggedIn && (
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <SupervisedUserCircleIcon />
              </ListItemIcon>
              <NavLink to={`/home`}>
                <ListItemText color="inherit">USERS PAGE</ListItemText>
              </NavLink>
            </ListItemButton>
          </ListItem>
        )}
        {auth.isLoggedIn && (
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <NavLink to="/">
                <ListItemText onClick={auth.logOut} color="inherit">
                  Log Out
                </ListItemText>
              </NavLink>
            </ListItemButton>
          </ListItem>
        )}
      </List>
      <Divider />
      <List>
        {["Contact", "Support", "Helpline 1234"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Drawer open={props.st} onClose={props.tDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
