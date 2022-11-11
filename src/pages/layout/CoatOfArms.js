import React from "react";
import CoatOfArmsImage from '../../images/coat-of-arms-zambia.png';
import Box from "@mui/material/Box";

const CoatOfArms = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <img src={CoatOfArmsImage} alt="Coat of arms of the republic of Zambia" />
    </Box>
  );
};

export default CoatOfArms;
