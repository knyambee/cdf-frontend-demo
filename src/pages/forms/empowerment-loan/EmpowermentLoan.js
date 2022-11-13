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
import EmpowerementLoanDetailForm from "./EmpowerementLoanDetailForm";
import EmpowerementLoanAttachments from "./EmpowerementLoanAttachments";
import EmpowerementLoanReview from "./EmpowerementLoanReview";
import { fields } from "./empowermentLoanBlankForm";
import api from "../../../api/api";

const steps = ["Main", "Attachments", "Review your application"];
const theme = createTheme();

const EmpowermentLoan = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formFields, setFormFields] = React.useState(fields);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <EmpowerementLoanDetailForm
            formFields={formFields}
            setFormFields={setFormFields}
          />
        );
      case 1:
        return (
          <EmpowerementLoanAttachments
            formFields={formFields}
            setFormFields={setFormFields}
          />
        );
      case 2:
        return <EmpowerementLoanReview formFields={formFields} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === steps.length - 1) {
      handleSubmitApplication();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmitApplication = () => {
    try {
      api.post("/empowermentloans", formFields, {headers: {'Authorization': `Bearer ${localStorage.getItem("bearer-token")}`}});
    } catch (err) {
      console.log(`Error ${err.message}`);
    }
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
            CONSTITUENCY DEVELOPMENT FUND (CDF) LOAN AGREEMENT FORM
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
                CDF application with reference number {formFields.referenceNo} has been submitted succefully. Thank you for your application. 
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

export default EmpowermentLoan;
