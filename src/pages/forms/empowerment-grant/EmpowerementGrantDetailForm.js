import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function EmpowerementGrantDetailForm({
  formFields,
  setFormFields,
}) {
  const [registrationDateValue, setRegistrationDateValue] =
    React.useState(null);
    const [firstApplicantDateSignedValue, setFirstApplicantDateSignedValue] = React.useState(null);
    const [secondtApplicantDateSignedValue, setSecondApplicantDateSignedValue] = React.useState(null);

  const handleOnChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  formFields.registrationDate = registrationDateValue;
  formFields.firstApplicantDateSigned = firstApplicantDateSignedValue;
  formFields.secondApplicantDateSigned = secondtApplicantDateSignedValue;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        SECTION A: GENERAL DETAILS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="applicantName"
            name="applicantName"
            label="1. Name of Club/Organised Group/Enterprise/Cooperative making application"
            fullWidth
            variant="standard"
            value={formFields.communityName}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="district"
            name="district"
            label="(a) Name of District"
            fullWidth
            variant="standard"
            value={formFields.district}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="constituency"
            name="constituency"
            label="(b) Name of Constituency"
            fullWidth
            variant="standard"
            value={formFields.constituency}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="ward"
            name="ward"
            label="(c) Name of Ward"
            fullWidth
            variant="standard"
            value={formFields.ward}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="zone"
            name="zone"
            label="(d) Name of Zone"
            fullWidth
            variant="standard"
            value={formFields.zone}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            required
            id="businessAddress"
            name="businessAddress"
            label="(e) Business Physical Address"
            fullWidth
            variant="standard"
            value={formFields.businessAddress}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="3. Registration Date"
              inputFormat="MM/dd/yyyy"
              value={registrationDateValue}
              onChange={(newValue) => {
                setRegistrationDateValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            4. Does the Club/Organised Group/Enterprise/Cooperative have any
            experience in a project of similar nature?
          </Typography>
          <RadioGroup
            id="organiseSimilarEvents"
            name="organiseSimilarEvents"
            value={formFields.organiseSimilarEvents}
            onChange={handleOnChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
          <TextField
            required
            id="similarExperience"
            name="similarExperience"
            label="If yes, please explain"
            fullWidth
            variant="standard"
            value={formFields.similarExperience}
            onChange={handleOnChange}
          />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h6" gutterBottom>
        SECTION B: Project Identification
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="mainProblems"
            name="mainProblems"
            label="5. What are the main Problems in your Community? Explain"
            fullWidth
            variant="standard"
            value={formFields.mainProblems}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="problemAddressed"
            name="problemAddressed"
            label="6. What problem is the project going to address? Explain"
            fullWidth
            variant="standard"
            value={formFields.problemAddressed}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="projectIdentification"
            name="projectIdentification"
            label="7. How did the group identify the project? (Attach Minutes where applicable) Explain"
            fullWidth
            variant="standard"
            value={formFields.projectIdentification}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="communityBenefit"
            name="communityBenefit"
            label="8. How will the project benefit the community?"
            fullWidth
            variant="standard"
            value={formFields.communityBenefit}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="jobsCreated"
            name="jobsCreated"
            label="9. How many direct jobs will be created?"
            fullWidth
            variant="standard"
            value={formFields.jobsCreated}
            onChange={handleOnChange}
          />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h6" gutterBottom>
        SECTION C: FINANCIAL ASSESSMENT
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography>
            10. Have you taken any loan from any organisation in the last 3
            years?{" "}
          </Typography>
          <RadioGroup
            id="takenOutLoan"
            name="takenOutLoan"
            value={formFields.takenOutLoan}
            onChange={handleOnChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            11. If yes, from which organisation and how much was the loan?
          </Typography>
          <TextField
            id="firstLoanAndOrganisation"
            name="firstLoanAndOrganisation"
            label="a."
            fullWidth
            variant="standard"
            value={formFields.firstLoanAndOrganisation}
            onChange={handleOnChange}
          />
          <TextField
            id="secondLoanAndOrganisation"
            name="secondLoanAndOrganisation"
            label="b."
            fullWidth
            variant="standard"
            value={formFields.secondLoanAndOrganisation}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="loanStatus"
            name="loanStatus"
            label="12. If yes to 10, what is the status of the loan taken?"
            fullWidth
            variant="standard"
            value={formFields.loanStatus}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            13. Provide Bank account or mobile money wallet registered for your
            Club/Group/Enterprise/Cooperative
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            id="bankName"
            name="bankName"
            label="BANK NAME"
            fullWidth
            variant="standard"
            value={formFields.bankName}
            onChange={handleOnChange}
          />
          <TextField
            id="bankBranch"
            name="bankBranch"
            label="BRANCH"
            fullWidth
            variant="standard"
            value={formFields.bankBranch}
            onChange={handleOnChange}
          />
          <TextField
            id="branchCode"
            name="branchCode"
            label="SORT/BRANCH CODE"
            fullWidth
            variant="standard"
            value={formFields.branchCode}
            onChange={handleOnChange}
          />
          <TextField
            id="swiftCode"
            name="swiftCode"
            label="SWIFT CODE"
            fullWidth
            variant="standard"
            value={formFields.swiftCode}
            onChange={handleOnChange}
          />
          <TextField
            id="accountNumber"
            name="accountNumber"
            label="ACCOUNT NUMBER"
            fullWidth
            variant="standard"
            value={formFields.accountNumber}
            onChange={handleOnChange}
          />
          <TextField
            id="tpin"
            name="tpin"
            label="TPIN"
            fullWidth
            variant="standard"
            value={formFields.tpin}
            onChange={handleOnChange}
          />
          <TextField
            id="mobileMoney"
            name="mobileMoney"
            label="MOBILE MONEY WALLET NAME AND NUMBER"
            fullWidth
            variant="standard"
            type="phone"
            value={formFields.mobileMoney}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            14. Has your Club/Group/Enterprise/Cooperative received any training
            in any of the following;
          </Typography>
          <Typography component="h1">
            <ol type="a">
              <li> Entrepreneurship/Business Skills</li>
              <li> Technical and Vocational Skills</li>
              <li> Savings</li>
              <li> Functional Literacy</li>
              <li>Financial literacy</li>
            </ol>
          </Typography>
          <TextField
            id="numberOfMembersTrained"
            name="numberOfMembersTrained"
            label="If trained, how many members? "
            fullWidth
            type="number"
            variant="standard"
            value={formFields.numberOfMembersTrained}
            onChange={handleOnChange}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="training"
            name="training"
            label="15. If yes, from which organization and how long was the training?"
            fullWidth
            variant="standard"
            value={formFields.training}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="members"
            name="members"
            label="16. List of Membership in the Club/Group/Enterprise/Cooperative:"
            fullWidth
            variant="standard"
            value={formFields.members}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>17. DECLARATION</Typography>
          <Typography component="h1">
            We the undersigned, on this day of{" "}
            <TextField variant="standard" sm={6}></TextField> declare that the
            information given herein is the correct state of affairs to the best
            of my knowledge. We will take full responsibility in the event of
            abuse, mismanagement, defrauding of the funds provided under this
            empowerment fund:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>18. Contact Person(s):</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>First Applicant</Typography>
          <TextField
            id="firstApplicantName"
            name="firstApplicantName"
            label="Name"
            fullWidth
            variant="standard"
            value={formFields.firstApplicantName}
            onChange={handleOnChange}
          />
          <TextField
            id="firstApplicantPhysicalAddress"
            name="firstApplicantPhysicalAddress"
            label="Physical Address"
            fullWidth
            variant="standard"
            value={formFields.firstApplicantPhysicalAddress}
            onChange={handleOnChange}
          />
          <TextField
            id="firstApplicantPhone"
            name="firstApplicantPhone"
            label="Phone"
            fullWidth
            type="phone"
            variant="standard"
            value={formFields.firstApplicantPhone}
            onChange={handleOnChange}
          />
          <TextField
            id="firstApplicantNrc"
            name="firstApplicantNrc"
            label="NRC"
            fullWidth
            variant="standard"
            value={formFields.firstApplicantNrc}
            onChange={handleOnChange}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label=" Date"
              inputFormat="MM/dd/yyyy"
              value={firstApplicantDateSignedValue}
              onChange={(newValue) => {
                setFirstApplicantDateSignedValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Second Applicant</Typography>
          <TextField
            id="secondApplicantName"
            name="secondApplicantName"
            label="Name"
            fullWidth
            variant="standard"
            value={formFields.secondApplicantName}
            onChange={handleOnChange}
          />
          <TextField
            id="secondApplicantPhysicalAddress"
            name="secondApplicantPhysicalAddress"
            label="Physical Address"
            fullWidth
            variant="standard"
            value={formFields.secondApplicantPhysicalAddress}
            onChange={handleOnChange}
          />
          <TextField
            id="secondApplicantPhone"
            name="secondApplicantPhone"
            label="Phone"
            fullWidth
            type="phone"
            variant="standard"
            value={formFields.secondApplicantPhone}
            onChange={handleOnChange}
          />
          <TextField
            id="secondApplicantNrc"
            name="secondApplicantNrc"
            label="NRC"
            fullWidth
            variant="standard"
            value={formFields.secondApplicantNrc}
            onChange={handleOnChange}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label=" Date"
              inputFormat="MM/dd/yyyy"
              value={secondtApplicantDateSignedValue}
              onChange={(newValue) => {
                setSecondApplicantDateSignedValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
