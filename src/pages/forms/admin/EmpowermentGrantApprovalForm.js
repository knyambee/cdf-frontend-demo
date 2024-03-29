import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CoatOfArms from "../../layout/CoatOfArms";
import { useState } from 'react';
import approve from './ApprovalResponse';
import api from 'api/api';
import RenderOnRole from 'security/RenderOnRole';
import { useNavigate } from 'react-router-dom';



const theme = createTheme();

const EmpowermentGrantApprovalForm = ({ formFields, taskId }) => {
  const [adminResponse] = useState(approve);
  const [comment, setComment] = useState("");
  const [approvalOpen, setApprovalOpen] = React.useState(false);
  const [rejectionOpen, setRejectionOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setComment(e.target.value);
  };

  const handleApproval = () => {
    adminResponse.id = taskId;
    adminResponse.status = true;
    try {
      api.post("/approve", adminResponse, { headers: { 'Authorization': `Bearer ${localStorage.getItem("bearer-token")}` } });
    } catch (err) {
      console.log(`Error ${err.message}`);
    }
    navigate('/');
  };

  const handleRejection = () => {
    adminResponse.id = taskId;
    adminResponse.status = false;
    try {
      api.post("/approve", adminResponse, { headers: { 'Authorization': `Bearer ${localStorage.getItem("bearer-token")}` } });
    } catch (err) {
      console.log(`Error ${err.message}`);
    }
    navigate('/');
  };

  const handleClickOpenApprovalDialog = () => {
    setApprovalOpen(true);
  };

  const handleClickOpenRejectionDialog = () => {
    setRejectionOpen(true);
  };

  const handleApprovalClose = () => {
    setApprovalOpen(false);
  };

  const handleRejectionClose = () => {
    setRejectionOpen(false);
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
            CONSTITUENCY DEVELOPMENT FUND (CDF) GRANT APPLICATION FORM FOR
            YOUTH, WOMEN AND COMMUNITY EMPOWERMENT
          </Typography>
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              SECTION A: GENERAL DETAILS
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="applicantName"
                  name="applicantName"
                  label="1. Name of Club/Organised Group/Enterprise/Cooperative making application"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.applicantName}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  required
                  id="district"
                  name="district"
                  label="(a) Name of District"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.district}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  required
                  id="constituency"
                  name="constituency"
                  label="(b) Name of Constituency"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.constituency}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  required
                  id="ward"
                  name="ward"
                  label="(c) Name of Ward"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.ward}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  required
                  id="zone"
                  name="zone"
                  label="(d) Name of Zone"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.zone}
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextField
                  required
                  id="businessAddress"
                  name="businessAddress"
                  label="(e) Business Physical Address"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.businessAddress}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="3. Registration Date"
                    inputFormat="MM/dd/yyyy"
                    value={formFields.registrationDate}
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
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.similarExperience}
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
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.mainProblems}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="problemAddressed"
                  name="problemAddressed"
                  label="6. What problem is the project going to address? Explain"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.problemAddressed}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="projectIdentification"
                  name="projectIdentification"
                  label="7. How did the group identify the project? (Attach Minutes where applicable) Explain"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.projectIdentification}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="communityBenefit"
                  name="communityBenefit"
                  label="8. How will the project benefit the community?"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.communityBenefit}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="jobsCreated"
                  name="jobsCreated"
                  label="9. How many direct jobs will be created?"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.jobsCreated}
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
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.firstLoanAndOrganisation}
                />
                <TextField
                  id="secondLoanAndOrganisation"
                  name="secondLoanAndOrganisation"
                  label="b."
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.secondLoanAndOrganisation}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="loanStatus"
                  name="loanStatus"
                  label="12. If yes to 10, what is the status of the loan taken?"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.loanStatus}
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
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.bankName}
                />
                <TextField
                  id="bankBranch"
                  name="bankBranch"
                  label="BRANCH"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.bankBranch}
                />
                <TextField
                  id="branchCode"
                  name="branchCode"
                  label="SORT/BRANCH CODE"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.branchCode}
                />
                <TextField
                  id="swiftCode"
                  name="swiftCode"
                  label="SWIFT CODE"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.swiftCode}
                />
                <TextField
                  id="accountNumber"
                  name="accountNumber"
                  label="ACCOUNT NUMBER"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.accountNumber}
                />
                <TextField
                  id="tpin"
                  name="tpin"
                  label="TPIN"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.tpin}
                />
                <TextField
                  id="mobileMoney"
                  name="mobileMoney"
                  label="MOBILE MONEY WALLET NAME AND NUMBER"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  type="phone"
                  value={formFields.mobileMoney}
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
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.numberOfMembersTrained}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="training"
                  name="training"
                  label="15. If yes, from which organization and how long was the training?"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.training}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="members"
                  name="members"
                  label="16. List of Membership in the Club/Group/Enterprise/Cooperative:"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.members}
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
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.firstApplicantName}
                />
                <TextField
                  id="firstApplicantPhysicalAddress"
                  name="firstApplicantPhysicalAddress"
                  label="Physical Address"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.firstApplicantPhysicalAddress}
                />
                <TextField
                  id="firstApplicantPhone"
                  name="firstApplicantPhone"
                  label="Phone"
                  fullWidth
                  type="phone"
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.firstApplicantPhone}
                />
                <TextField
                  id="firstApplicantNrc"
                  name="firstApplicantNrc"
                  label="NRC"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.firstApplicantNrc}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label=" Date"
                    inputFormat="MM/dd/yyyy"
                    value={formFields.firstApplicantDateSigned}
                    disabled
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
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.secondApplicantName}
                />
                <TextField
                  id="secondApplicantPhysicalAddress"
                  name="secondApplicantPhysicalAddress"
                  label="Physical Address"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.secondApplicantPhysicalAddress}
                />
                <TextField
                  id="secondApplicantPhone"
                  name="secondApplicantPhone"
                  label="Phone"
                  fullWidth
                  type="phone"
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.secondApplicantPhone}
                />
                <TextField
                  id="secondApplicantNrc"
                  name="secondApplicantNrc"
                  label="NRC"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.secondApplicantNrc}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label=" Date"
                    inputFormat="MM/dd/yyyy"
                    value={formFields.secondApplicantDateSigned}
                    disabled
                    onChange={(newValue) => {
                      setSecondApplicantDateSignedValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <br />
            <RenderOnRole roles={['ward']}>
              <Typography variant="h6" gutterBottom>
                WARD COMMITTEE REVIEW
              </Typography>
            </RenderOnRole>
            <RenderOnRole roles={['constituency']}>
              <Typography variant="h6" gutterBottom>
                CONSTITUENCY DEVELOPMENT COMMITTEE REVIEW
              </Typography>
            </RenderOnRole>
            <RenderOnRole roles={['local_government']}>
              <Typography variant="h6" gutterBottom>
                LOCAL GOVERNMENT REVIEW
              </Typography>
            </RenderOnRole>
            <RenderOnRole roles={['minister']}>
              <Typography variant="h6" gutterBottom>
                MINISTER REVIEW
              </Typography>
            </RenderOnRole>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField fullWidth label="Comments" id="comments"
                  multiline
                  rows={6}
                  onChange={handleOnChange}
                  value={comment}
                />
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={2} direction="row" justifyContent="center"
                >
                  <Button variant="contained" color="error" size="large" onClick={handleClickOpenRejectionDialog}>Reject</Button>
                  <Dialog
                    open={rejectionOpen}
                    onClose={handleRejectionClose}
                  >
                    <DialogTitle id="rejectionTitle">
                      {"Reject application?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="rejectionDescription">
                        The appliction will be rejected and applicant or previous officer notified.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleRejectionClose}>Cancel</Button>
                      <Button onClick={handleRejection}>
                        Reject
                      </Button>
                    </DialogActions>
                  </Dialog>
                  <Button variant="contained" color="success" size="large" onClick={handleClickOpenApprovalDialog}>Approve</Button>
                  <Dialog
                    open={approvalOpen}
                    onClose={handleApprovalClose}
                  >
                    <DialogTitle id="approvalTitle">
                      {"Approve application?"}
                    </DialogTitle>
                    <RenderOnRole roles={['ward', 'constituency', 'local_government']}>
                      <DialogContent>
                        <DialogContentText id="approvalDescription">
                          The appliction will be passed on to the next stage for review.
                        </DialogContentText>
                      </DialogContent>
                    </RenderOnRole>

                    <RenderOnRole roles={['minister']}>
                      <DialogContent>
                        <DialogContentText id="ministerApprovalDescription">
                          The application will be eligible for funding.
                        </DialogContentText>
                      </DialogContent>
                    </RenderOnRole>
                    <DialogActions>
                      <Button onClick={handleApprovalClose}>Cancel</Button>
                      <Button onClick={handleApproval}>
                        Approve
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Stack>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default EmpowermentGrantApprovalForm