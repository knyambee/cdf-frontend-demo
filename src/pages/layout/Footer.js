import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = (props) => {
  return (
    <Container maxWidth="sm">
      <Typography variant="body1" align="center">
        Kelvin Nyambe
      </Typography>
      <Copyright />
    </Container>
  );
};

export default Footer;
