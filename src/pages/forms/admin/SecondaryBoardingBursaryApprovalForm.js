import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CoatOfArms from "../../layout/CoatOfArms";

const theme = createTheme();

const SecondaryBoardingBursaryApprovalForm = ({formFields}) => {
  return (
    <div>SecondaryBoardingBursaryApprovalForm</div>
  )
}

export default SecondaryBoardingBursaryApprovalForm