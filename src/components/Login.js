import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router";

import { AuthContext } from "./../shared/context/auth-context";

import Navbar from "./Navbar/NavBar";

const theme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const auth = React.useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      uname: data.get("uname"),
      password: data.get("password"),
    };

    if (formData.uname === "foo" && formData.password === "bar") {
      auth.logIn(formData.uname);
      navigate("/home");
    } else {
      alert("WRONG USERNAME OR PASSWORD !!!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="User name"
              name="uname"
              autoComplete="email"
              autoFocus
              sx={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
