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

const EmpowermentLoanApprovalForm = ({ formFields, taskId }) => {
  const [wardCommitteeResponse, setWardCommitteeResponse] = useState(approve);

  const handleWardCommittieeAproval = () => {
    wardCommitteeResponse.id = taskId;
    wardCommitteeResponse.status = true;
    try {
      api.post("/approve", wardCommitteeResponse, { headers: { 'Authorization': `Bearer ${localStorage.getItem("bearer-token")}` } });
    } catch (err) {
      console.log(`Error ${err.message}`);
    }
  };

  const handleWardCommittieeRejection = () => {
    wardCommitteeResponse.id = taskId;
    wardCommitteeResponse.status = false;
    try {
      api.post("/approve", wardCommitteeResponse, { headers: { 'Authorization': `Bearer ${localStorage.getItem("bearer-token")}` } });
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
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              SECTION A: GENERAL PROPOSAL DETAILS
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography component="h1">
                  This LOAN AGREEMENT, is made this day,{" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    sm={4}
                    id="borrowingDate"
                    name="borrowingDate"
                    value={formFields.borrowingDate}
                  ></TextField>
                  , between {" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    sm={4}
                    id="borrower"
                    name="borrower"
                    value={formFields.borrower}
                  ></TextField>{" "}
                  (hereinafter known as “BORROWER”) of address{" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    sm={4}
                    id="borrowerAddress"
                    name="borrowerAddress"
                    value={formFields.borrowerAddress}
                  ></TextField>
                  in Ward{" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    sm={4}
                    id="borrowerWard"
                    name="borrowerWard"
                    value={formFields.borrowerWard}
                  ></TextField>{" "}
                  Constituency{" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    sm={4}
                    id="borrowerConstituency"
                    name="borrowerConstituency"
                    value={formFields.borrowerConstituency}
                  ></TextField>{" "}
                  and{" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    sm={4}
                    id="lender"
                    name="lender"
                    value={formFields.lender}
                  ></TextField>
                  (hereinafter known as “LENDER”).
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  The LENDER and BORROWER shall collectively be known herein as
                  “Parties.” In determining the rights and duties of the Parties under
                  this LOAN AGREEMENT, the entire document must be read as a whole.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1">
                  The Lender agrees to give loan funds/material/equipment worth ZMK {" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    sm={4}
                    id="loanAmount"
                    name="loanAmount"
                    value={formFields.loanAmount}
                  ></TextField>{" "}
                  on loan basis to the Beneficiary for purposes of venturing
                  information {" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    sm={4}
                    id="loanPurpose"
                    name="loanPurpose"
                    value={formFields.loanPurpose}
                  ></TextField>{" "}
                  Business as contained in the application form.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component="h1">
                  Therefore, the Beneficiary accepts the Terms and Conditions of the
                  said loan amounting to{" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    id="loanAmountBenficiary"
                    name="loanAmountBenficiary"
                    value={formFields.loanAmountBenficiary}
                  ></TextField>
                  (Amount in Words){" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    id="loanAmountBenficiaryInWords"
                    name="loanAmountBenficiaryInWords"
                    value={formFields.loanAmountBenficiaryInWords}
                  ></TextField>{" "}
                  (Amount in Figures) at 5% minimal simple interest rate.
                </Typography>
              </Grid>
            </Grid>
            <br />
            <Typography variant="h6" gutterBottom>
              LOAN TERMS AND CONDITIONS
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography>
                  The BENEFICIARY and LENDER hereby set further forth their rights and
                  obligations to one another under this LOAN AGREEMENT and agree to be
                  legally binding as follows: -
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">a) Payback Period</Typography>
                <Typography component="h1">
                  The payback period for the loan shall be {" "}
                  <TextField
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    sm={6}
                    id="paybackPeriod"
                    name="paybackPeriod"
                    value={formFields.paybackPeriod}
                  ></TextField>{" "}
                  months.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">b) Loan Repayment</Typography>
                <Typography component="h1">
                  <ol type="i">
                    <li>
                      The first payment shall be 60 days from the date of getting the
                      loan;
                    </li>
                    <li>
                      The subsequent instalments shall be paid at the end of the
                      month;
                    </li>
                    <li>
                      Delayed payments shall not exceed 5 days after the end of the
                      month; and
                    </li>
                    <li>
                      Payments made after 5 days shall attract a charge 2% of the
                      instalment amount.
                    </li>
                  </ol>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">a) Repayment Method</Typography>
                <Typography>
                  The Borrower shall deposit the loan repayment by way of monthly
                  instalments through;
                </Typography>
                <Typography component="h1">
                  <ol type="i">
                    <li>
                      Bank Account{" "}
                      <TextField
                        variant="filled"
                        InputProps={{
                          readOnly: true,
                        }}
                        sm={8}
                        id="bankAccount"
                        name="bankAccount"
                        value={formFields.bankAccount}
                      ></TextField>
                    </li>
                    <li>
                      Mobile Money{" "}
                      <TextField
                        variant="filled"
                        InputProps={{
                          readOnly: true,
                        }}
                        sm={8}
                        id="mobileMoney"
                        name="mobileMoney"
                        value={formFields.mobileMoney}
                      ></TextField>
                    </li>
                    <li>
                      E-Wallet {" "}
                      <TextField
                        variant="filled"
                        InputProps={{
                          readOnly: true,
                        }}
                        sm={8}
                        id="eWallet"
                        name="eWallet"
                        value={formFields.eWallet}
                      ></TextField>
                    </li>
                  </ol>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  The Borrower shall be responsible to ensure that repayments are made
                  to the correct Bank Account or Mobile number.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">
                  d) Ownership of Equipment and Machinery using this Fund:
                </Typography>
                <Typography component="h1">
                  <ol type="i">
                    <li>
                      {" "}
                      All Equipment and Machinery bought using this facility shall be
                      vested in the name of the LENDER;
                    </li>
                    <li>
                      {" "}
                      All Equipment and Machinery bought using this facility shall be
                      registered in the name of the Local Authority; and
                    </li>
                    <li>
                      Ownership shall NOT be transferred to the LOAN BENEFICIARY until
                      the loan amount is fully paid.
                    </li>
                  </ol>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">e) Repayment for Equipment:</Typography>
                <Typography component="h1">
                  <ol type="i">
                    <li>
                      {" "}
                      The first payment shall be made 60 days from the date of getting
                      the loan;
                    </li>
                    <li>
                      {" "}
                      The subsequent instalments shall be paid at the end of the
                      month;
                    </li>
                    <li>
                      {" "}
                      Delayed payments shall not exceed 5 days after the end of the
                      month;
                    </li>
                    <li>
                      {" "}
                      Payments made after 5 days shall attract a charge 2% of the
                      instalment amount;
                    </li>
                    <li>
                      Neglecting to pay the loan instalments for any reason for three
                      consecutive months, shall result in termination of the
                      agreement;
                    </li>
                    <li>
                      Following the termination of the agreement:
                      <ol type="a">
                        <li>
                          {" "}
                          The equipment shall be recovered from the borrower within
                          seven (7) days;
                        </li>
                        <li>
                          The borrower shall forfeit the initial deposit and other
                          payments made before the termination of the agreement; and
                        </li>
                        <li>
                          The borrower shall be blacklisted on the Constituency list
                          for 5 years.
                        </li>
                      </ol>
                    </li>
                  </ol>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="h1">
                  SIGNED BY{" "}
                  <TextField
                    sm={8}
                    variant="filled"
                    InputProps={{
                      readOnly: true,
                    }}
                    id="signatoryFinanceInst"
                    name="signatoryFinanceInst"
                    value={formFields.signatoryFinanceInst}
                  ></TextField>
                  (FOR AND ON BEHALF OF THE FINANCIAL INSTITUTION)
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid>
                  <Typography component="h1">
                    Full Name of Financial Institution:{" "}
                    <TextField
                      variant="filled"
                      InputProps={{
                        readOnly: true,
                      }}
                      sm={8}
                      id="financialInstitution"
                      name="financialInstitution"
                      value={formFields.financialInstitution}
                    ></TextField>
                  </Typography>
                </Grid>

                <Grid>
                  <Typography component="h1">
                    Position:{" "}
                    <TextField
                      variant="filled"
                      InputProps={{
                        readOnly: true,
                      }}
                      sm={8}
                      id="positionSignatory"
                      name="positionSignatory"
                      value={formFields.positionSignatory}
                    ></TextField>
                  </Typography>
                </Grid>
                <Grid>
                  <Typography component="h1">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Date"
                        inputFormat="MM/dd/yyyy"
                        disabled
                        value={formFields.dateSignedFinancialInstitution}
                        onChange={(newValue) => {
                          setDateSignedFinancialInstitutionValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <Typography variant="h6" gutterBottom>
              WARD COMMITTEE REVIEW
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField fullWidth label="Comments" id="comments"
                  multiline
                  rows={6}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={2} direction="row" justifyContent="center"
                >
                  <Button variant="contained" color="success" size="large" onClick={handleWardCommittieeAproval}>Approve</Button>
                  <Button variant="contained" color="error" size="large" onClick={handleWardCommittieeRejection}>Reject</Button>
                </Stack>
              </Grid>
            </Grid>
        </React.Fragment>
      </Paper>
    </Container>
    </ThemeProvider >
  )
}

export default EmpowermentLoanApprovalForm