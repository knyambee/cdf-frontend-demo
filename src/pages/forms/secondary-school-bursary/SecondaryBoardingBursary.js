import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CoatOfArms from "../../layout/CoatOfArms";
import SecondaryBoardingBursaryDetailForm from "./SecondaryBoardingBursaryDetailForm";
import SecondaryBoardingBursaryAttachments from "./SecondaryBoardingBursaryAttachments";
import SecondaryBoardingBursaryReview from "./SecondaryBoardingBursaryReview";

const steps = ["Main", "Attachments", "Review your application"];
const fields = {};

const theme = createTheme();

const SecondaryBoardingBursary = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formFields, setFormFields] = React.useState(fields);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <SecondaryBoardingBursaryDetailForm
            formFields={formFields}
            setFormFields={setFormFields}
          />
        );
      case 1:
        return (
          <SecondaryBoardingBursaryAttachments
            formFields={formFields}
            setFormFields={setFormFields}
          />
        );
      case 2:
        return <SecondaryBoardingBursaryReview formFields={formFields} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <CoatOfArms />
          <Typography component="h1" variant="h4" align="center">
            CONSTITUENCY DEVELOPMENT FUND (CDF) SECONDARY BOARDING SCHOOL
            BURSARY APPLICATION FORM
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your application.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1
                      ? "Submit application"
                      : "Next"}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default SecondaryBoardingBursary;
