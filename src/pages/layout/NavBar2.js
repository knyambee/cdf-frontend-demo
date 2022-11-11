import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AuthService from "../../security/AuthService";

const NavBar2 = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 ,  textDecoration: 'none',}}
            component="a"
            href="/"
          >
            CDF
          </Typography>
          <nav>
            {/* <Link
              variant="button"
              color="inherit"
              href="/features"
              sx={{ my: 1, mx: 1.5,  textDecoration: 'none', }}
            >
              Features
            </Link> */}
            <Link
              variant="button"
              color="inherit"
              href="/about"
              sx={{ my: 1, mx: 1.5,  textDecoration: 'none', }}
            >
              About
            </Link>
            {/* <Link
              variant="button"
              color="inherit"
              href="/guide"
              sx={{ my: 1, mx: 1.5,   textDecoration: 'none',}}
            >
              Guide
            </Link> */}
          </nav>
          <Button
            onClick={AuthService.logout}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            color="inherit"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar2;
