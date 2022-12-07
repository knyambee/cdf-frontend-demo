import React from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CoatOfArms from "../../layout/CoatOfArms";
import approve from './ApprovalResponse';
import { useState } from 'react';
import api from 'api/api';
import RenderOnRole from 'security/RenderOnRole';
import { useNavigate} from 'react-router-dom';

const theme = createTheme();

const SkillsTrainingBursaryApprovalForm = ({ formFields, taskId }) => {
  const [adminResponse] = useState(approve);
  const [comment, setComment] = useState("");
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
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <CoatOfArms />
          <Typography component="h1" variant="h4" align="center">
            CONSTITUENCY DEVELOPMENT FUND SKILLS DEVELOPMENT BURSARY APPLICATION
            FORM
          </Typography>
          <React.Fragment>
            <Typography variant="h6" gutterBottom>
              PART A: TO BE COMPLETED BY APPLICANT
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="surname"
                  name="surname"
                  label="1. Surname"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.surname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="otherNames"
                  name="otherNames"
                  label="2. Other Names"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.otherNames}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="gender"
                  name="gender"
                  label="3. Sex (Male/Female)"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.gender}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="nationality"
                  name="nationality"
                  label="Nationality"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.nationality}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="nrc"
                  name="nrc"
                  label="4. N.R.C No:"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.nrc}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="5. Date of birth"
                    inputFormat="MM/dd/yyyy"
                    disabled
                    value={formFields.dateOfBirth}
                    onChange={(newValue) => {
                      setDateOfBirthValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="placeOfBirth"
                  name="placeOfBirth"
                  label="Place of Birth"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.placeOfBirth}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="state"
                  name="district"
                  label="(a) District"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.district}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="constituency"
                  name="constituency"
                  label="(b) Constituency"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.constituency}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="ward"
                  name="ward"
                  label="(c) Ward"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.ward}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  id="zone"
                  name="zone"
                  label="(d) Zone"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.zone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="postalAddress"
                  name="postalAddress"
                  label="7. Postal Address"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.postalAddress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="mobilePhone"
                  name="mobilePhone"
                  label="8. Mobile Phone"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  type="phone"
                  value={formFields.mobilePhone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="orphanStatus"
                  name="orphanStatus"
                  label="(a) Single Orphan / Double Orphan / Other (please Specify)"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.opharnStatus}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="disability"
                  name="disability"
                  label="(b) Are you disabled? Yes/No, If yes, specify nature of disability:"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.disability}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="financialChallenge"
                  name="financialChallenge"
                  label="(c) Financial Challenge (Specify):"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.financialChallenge}
                />
              </Grid>
            </Grid>
            <br />
            <Typography variant="h6" gutterBottom>
              PART B: SCHOOL AND COURSE DETAILS
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="schoolLeaver"
                  name="schoolLeaver"
                  label="10. School Leaver/Non School Leaver"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.schoolLeaver}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastGradeAttended"
                  name="lastGradeAttended"
                  label="Last grade attended"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.lastGradeAttended}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastSchoolAttended"
                  name="lastSchoolAttended"
                  label="11. Last School attended"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.lastSchoolAttended}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastSchoolAttendedDistrict"
                  name="lastSchoolAttendedDistrict"
                  label="District"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.lastSchoolAttendedDistrict}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="12. From Date"
                    inputFormat="MM/dd/yyyy"
                    disabled
                    value={formFields.fromDate}
                    onChange={(newValue) => {
                      setFromDateValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="To Date"
                    inputFormat="MM/dd/yyyy"
                    disabled
                    value={formFields.toDate}
                    onChange={(newValue) => {
                      setToDateValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="highestCertificate"
                  name="highestCertificate"
                  label="13. Highest Certificate attained"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.highestCertificate}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="receivedAcceptanceLetter"
                  name="receivedAcceptanceLetter"
                  label="14. Have you received an acceptance letter?"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.receivedAcceptanceLetter}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="nameOfAcceptingInstitution"
                  name="nameOfAcceptingInstitution"
                  label="15. If your answer to (14) above was yes, name the institution you have been accepted:"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.nameOfAcceptingInstitution}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="programmeOfStudy"
                  name="programmeOfStudy"
                  label="16. What programme of study do you wish to pursue?"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.programmeOfStudy}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="programmeDuration"
                  name="programmeDuration"
                  label="17. Duration of programme."
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.programmeDuration}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="receivedSponsorshipBefore"
                  name="receivedSponsorshipBefore"
                  label="18. Have you applied for or received any scholarship, bursary from any other organization or authority before?"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.receivedSponsorshipBefore}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="otherSponsorshipDetails"
                  name="otherSponsorshipDetails"
                  label="17. If your answer to 18 above was yes, give details."
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.otherSponsorshipDetails}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="cdfSponsorship"
                  name="cdfSponsorship"
                  label="20. Have you ever benefitted from the CDF Skills Development Bursary sponsorship before?"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.cdfSponsorship}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="cdfSponsorshipDetails"
                  name="cdfSponsorshipDetails"
                  label="21. If your answer to 20 above was yes, give details of when and how you benefited"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.cdfSponsorshipDetails}
                />
              </Grid>
            </Grid>
            <br />
            <Typography variant="h6" gutterBottom>
              PART C: PERSONAL DETAILS OF PARENT/GUARDIAN
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="gurdianSurname"
                  name="gurdianSurname"
                  label="22. Surname"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.gurdianSurname}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="gurdianOtherName"
                  name="gurdianOtherName"
                  label="23. Other names"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.gurdianOtherName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="gurdianGender"
                  name="gurdianGender"
                  label="24. Gender"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.gurdianGender}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="25. Date of birth"
                    inputFormat="MM/dd/yyyy"
                    disabled
                    value={formFields.guardianDateOfBirth}
                    onChange={(newValue) => {
                      setGurdianDateOfBirthValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="gurdianNationality"
                  name="gurdianNationality"
                  label="26. Nationality"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.gurdianNationality}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="guardianNRC"
                  name="guardianNRC"
                  label="27. N.R.C Number"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.guardianNRC}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="relationshipToApplicant"
                  name="relationshipToApplicant"
                  label="28. Relationship to applicant"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.relationshipToApplicant}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="guardianVillage"
                  name="guardianVillage"
                  label="29. village"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.guardianVillage}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="guardianChief"
                  name="guardianChief"
                  label="30. Chief"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.guardianChief}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="guardianDistrict"
                  name="guardianDistrict"
                  label="31. District"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.guardianDistrict}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="guardianAddress"
                  name="guardianAddress"
                  label="32. Residential Address"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.guardianAddress}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="guardianConstituency"
                  name="guardianConstituency"
                  label="33. Residential Address"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.guardianConstituency}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="guardianDistrictDistrict"
                  name="guardianDistrictDistrict"
                  label="34. District"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.guardianDistrictDistrict}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="guardianProvince"
                  name="guardianProvince"
                  label="35. Province"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.guardianProvince}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="guardianPostalAddress"
                  name="guardianPostalAddress"
                  label="36. Postal Address"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.guardianPostalAddress}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="guardianPhoneNumber"
                  name="guardianPhoneNumber"
                  label="37. Phone Number"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  type="phone"
                  value={formFields.guardianPhoneNumber}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="guardianEmail"
                  name="guardianEmail"
                  label="38. Email Address"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  type="email"
                  value={formFields.guardianEmail}
                />
              </Grid>
            </Grid>
            <br />
            <Typography variant="h6" gutterBottom>
              PART D: EMPLOYMENT DETAILS OF PARENT/GUARDIAN (WHERE APPLICABLE)
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="inherit">39. Occupation of:</Typography>
                <TextField
                  id="occupationFather"
                  name="occupationFather"
                  label="a. Father"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.occupationFather}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="occupationMother"
                  name="occupationMother"
                  label="b. Mother"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.occupationMother}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="occupationGuardian"
                  name="occupationGuardian"
                  label="c. Guardian"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.occupationGuardian}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="inherit">40. Name of Employer of:</Typography>
                <TextField
                  id="employerFather"
                  name="employerFather"
                  label="a. Father"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.employerFather}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="employerMother"
                  name="employerMother"
                  label="b. Mother"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.employerMother}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="employerGuardian"
                  name="employerGuardian"
                  label="c. Guardian"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.employerGuardian}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="inherit">41. Position/Rank of:</Typography>
                <TextField
                  id="positionFather"
                  name="positionFather"
                  label="a. Father"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.positionFather}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="positionMother"
                  name="positionMother"
                  label="b. Mother"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.positionMother}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="positionGuardian"
                  name="positionGuardian"
                  label="c. Guardian"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                  value={formFields.positionGuardian}
                />
              </Grid>
            </Grid>
            <br />
            <Typography variant="h6" gutterBottom>
              PART E: DECLARATION
            </Typography>
            <Typography component="h1">
              I{" "}
              <TextField
                variant="filled"
                InputProps={{
                  readOnly: true,
                }}
                id="applicantNameDecl"
                name="applicantNameDecl"
              >
                {" "}
              </TextField>
              of NRC number {" "}
              <TextField
                variant="filled"
                InputProps={{
                  readOnly: true,
                }}
                id="applicantNRCDecl"
                name="applicantNRCDecl"
              >
                {" "}
              </TextField>{" "}
              do declare that to the best of my knowledge, the information I have
              given is the absolute truth. I also understand that any false
              information on this form will lead to immediate forfeiture of this
              assistance and possible prosecution or both.
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="applicantSignature"
                  name="applicantSignature"
                  label="Signature of Applicant"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    disabled
                    value={formFields.applicantSigningDate}
                    onChange={(newValue) => {
                      setApplicantSigningDateValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="parentGuardianSignature"
                  name="parentGuardianSignature"
                  label="Signature of Parent/Guardian"
                  fullWidth
                  variant="filled"
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    value={formFields.parentGuardianSigningDate}
                    disabled
                    onChange={(newValue) => {
                      setParentGuardianSigningDateValue(newValue);
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
                  <Button variant="contained" color="error" size="large" onClick={handleRejection}>Reject</Button>
                  <Button variant="contained" color="success" size="large" onClick={handleApproval}>Approve</Button>
                </Stack>
              </Grid>
            </Grid>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider >
  )
}

export default SkillsTrainingBursaryApprovalForm