import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function EmpowerementLoanDetailForm({
  formFields,
  setFormFields,
}) {
  const [
    dateSignedFinancialInstitutionValue,
    setDateSignedFinancialInstitutionValue,
  ] = React.useState(null);

  const handleOnChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  formFields.dateSignedFinancialInstitution =
    dateSignedFinancialInstitutionValue;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        SECTION A: GENERAL PROPOSAL DETAILS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography component="h1">
            This LOAN AGREEMENT, is made this day,{" "}
            <TextField
              variant="standard"
              sm={4}
              id="borrowingDate"
              name="borrowingDate"
              value={formFields.borrowingDate}
              onChange={handleOnChange}
            ></TextField>
            , between {" "}
            <TextField
              variant="standard"
              sm={4}
              id="borrower"
              name="borrower"
              value={formFields.borrower}
              onChange={handleOnChange}
            ></TextField>{" "}
            (hereinafter known as “BORROWER”) of address{" "}
            <TextField
              variant="standard"
              sm={4}
              id="borrowerAddress"
              name="borrowerAddress"
              value={formFields.borrowerAddress}
              onChange={handleOnChange}
            ></TextField>
            in Ward{" "}
            <TextField
              variant="standard"
              sm={4}
              id="borrowerWard"
              name="borrowerWard"
              value={formFields.borrowerWard}
              onChange={handleOnChange}
            ></TextField>{" "}
            Constituency{" "}
            <TextField
              variant="standard"
              sm={4}
              id="borrowerConstituency"
              name="borrowerConstituency"
              value={formFields.borrowerConstituency}
              onChange={handleOnChange}
            ></TextField>{" "}
            and{" "}
            <TextField
              variant="standard"
              sm={4}
              id="lender"
              name="lender"
              value={formFields.lender}
              onChange={handleOnChange}
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
              variant="standard"
              sm={4}
              id="loanAmount"
              name="loanAmount"
              value={formFields.loanAmount}
              onChange={handleOnChange}
            ></TextField>{" "}
            on loan basis to the Beneficiary for purposes of venturing
            information {" "}
            <TextField
              variant="standard"
              sm={4}
              id="loanPurpose"
              name="loanPurpose"
              value={formFields.loanPurpose}
              onChange={handleOnChange}
            ></TextField>{" "}
            Business as contained in the application form.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography component="h1">
            Therefore, the Beneficiary accepts the Terms and Conditions of the
            said loan amounting to{" "}
            <TextField
              variant="standard"
              id="loanAmountBenficiary"
              name="loanAmountBenficiary"
              value={formFields.loanAmountBenficiary}
              onChange={handleOnChange}
            ></TextField>
            (Amount in Words){" "}
            <TextField
              variant="standard"
              id="loanAmountBenficiaryInWords"
              name="loanAmountBenficiaryInWords"
              value={formFields.loanAmountBenficiaryInWords}
              onChange={handleOnChange}
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
              variant="standard"
              sm={6}
              id="paybackPeriod"
              name="paybackPeriod"
              value={formFields.paybackPeriod}
              onChange={handleOnChange}
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
                  variant="standard"
                  sm={8}
                  id="bankAccount"
                  name="bankAccount"
                  value={formFields.bankAccount}
                  onChange={handleOnChange}
                ></TextField>
              </li>
              <li>
                Mobile Money{" "}
                <TextField
                  variant="standard"
                  sm={8}
                  id="mobileMoney"
                  name="mobileMoney"
                  value={formFields.mobileMoney}
                  onChange={handleOnChange}
                ></TextField>
              </li>
              <li>
                E-Wallet {" "}
                <TextField
                  variant="standard"
                  sm={8}
                  id="eWallet"
                  name="eWallet"
                  value={formFields.eWallet}
                  onChange={handleOnChange}
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
              variant="standard"
              id="signatoryFinanceInst"
              name="signatoryFinanceInst"
              value={formFields.signatoryFinanceInst}
              onChange={handleOnChange}
            ></TextField>
            (FOR AND ON BEHALF OF THE FINANCIAL INSTITUTION)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid>
            <Typography component="h1">
              Full Name of Financial Institution:{" "}
              <TextField
                variant="standard"
                sm={8}
                id="financialInstitution"
                name="financialInstitution"
                value={formFields.financialInstitution}
                onChange={handleOnChange}
              ></TextField>
            </Typography>
          </Grid>

          <Grid>
            <Typography component="h1">
              Position:{" "}
              <TextField
                variant="standard"
                sm={8}
                id="positionSignatory"
                name="positionSignatory"
                value={formFields.positionSignatory}
                onChange={handleOnChange}
              ></TextField>
            </Typography>
          </Grid>
          <Grid>
            <Typography component="h1">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  inputFormat="MM/dd/yyyy"
                  value={dateSignedFinancialInstitutionValue}
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
    </React.Fragment>
  );
}
