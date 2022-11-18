import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CommunityProjectDetailForm({
  formFields,
  setFormFields,
}) {
  const [dateSignedProposerValue, setDateSignedProposerValue] = React.useState(null);
  const [dateSignedSeconderValue, setDateSignedSeconderValue]= React.useState(null);

  const handleOnChange = (e) => {
    setFormFields((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  

  formFields.dateSignedProposer = dateSignedProposerValue;
  formFields.dateSignedSeconder = dateSignedSeconderValue;  


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        SECTION A: GENERAL PROPOSAL DETAILS
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="communityName"
            name="communityName"
            label="1. Name of Community making the proposal"
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
        <Grid item xs={12}>
          <TextField
            required
            id="landTitle"
            name="landTitle"
            label="3. Land Title/Ownership (where applicable)"
            fullWidth
            variant="standard"
            value={formFields.landTitle}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="projectType"
            name="projectType"
            label="4. Type of Project (Which sector does it fall in e.g Water, Educatation or Health)"
            fullWidth
            variant="standard"
            value={formFields.projectType}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="numberBeneficiary"
            name="numberBeneficiary"
            label="5. Estimated population benefiting from the project"
            fullWidth
            variant="standard"
            type="number"
            value={formFields.numberBeneficiary}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="communityBasedProjects"
            name="communityBasedProjects"
            label="6. Has the community been involved in any community based project before? If yes, please give details"
            fullWidth
            variant="standard"
            value={formFields.communityBasedProjects}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="comunityFunding"
            name="comunityFunding"
            label="7. Has the community received any funding from any organization? (If yes which organization and when and for what activities?)"
            fullWidth
            variant="standard"
            value={formFields.comunityFunding}
            onChange={handleOnChange}
          />
        </Grid>
      </Grid>
      <br />
      <Typography variant="h6" gutterBottom>
        SECTION B: PROJECT IDENTIFICATION
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="mainProblems"
            name="mainProblems"
            label="8. What are the main problems in the area?"
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
            label="9. Which of these problems is the proposed project trying to address and how?"
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
            label="10. How did the community identify the project? (Attach minutes where applicable)"
            fullWidth
            variant="standard"
            value={formFields.projectIdentification}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="doneBefore"
            name="doneBefore"
            label="11. Has anything been done before to address the problem and if any, was it successfully implemented? Yes / No"
            variant="standard"
            fullWidth
            value={formFields.doneBefore}
            onChange={handleOnChange}
          ></TextField>
          <TextField
            id="doneBeforeExplanation"
            name="doneBeforeExplanation"
            label="Explain"
            fullWidth
            variant="standard"
            value={formFields.doneBeforeExplanation}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="beneficiaries"
            name="beneficiaries"
            label="12. State the beneficiaries of the proposed project?"
            fullWidth
            variant="standard"
            value={formFields.beneficiaries}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="estimatedCost"
            name="estimatedCost"
            label="13. What is the estimated cost of the project: ZMK"
            fullWidth
            variant="standard"
            value={formFields.estimatedCost}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="communityContribution"
            name="communityContribution"
            label="14. How will the Community contribute towards the cost of the project? (In terms of maintenance fees, water supply, labour etc."
            fullWidth
            variant="standard"
            value={formFields.communityContribution}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="committeeMembers"
            name="committeeMembers"
            label="15. List the proposed Project Committe Members:"
            fullWidth
            variant="standard"
            value={formFields.committeeMembers}
            onChange={handleOnChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="communitySustainability"
            name="communitySustainability"
            label="16. How will the community ensure project sustainability?"
            fullWidth
            variant="standard"
            value={formFields.communitySustainability}
            onChange={handleOnChange}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="nameProjectProposer"
            name="nameProjectProposer"
            label="Name (Project Proposer)"
            fullWidth
            variant="standard"
            value={formFields.nameProjectProposer}
            onChange={handleOnChange}
          />
          <TextField
            id="nrcProjectProposer"
            name="nrcProjectProposer"
            label="N.R.C"
            fullWidth
            variant="standard"
            value={formFields.nrcProjectProposer}
            onChange={handleOnChange}
          />
          <TextField
            id="addressProjectProposer"
            name="addressProjectProposer"
            label="Address"
            fullWidth
            variant="standard"
            value={formFields.addressProjectProposer}
            onChange={handleOnChange}
          />
          <TextField
            id="phoneProjectProposer"
            name="phoneProjectProposer"
            label="Phone"
            type="phone"
            fullWidth
            variant="standard"
            value={formFields.phoneProjectProposer}
            onChange={handleOnChange}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  inputFormat="MM/dd/yyyy"
                  value={dateSignedProposerValue}
                  onChange={(newValue) => {
                    setDateSignedProposerValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="nameProjectSeconder"
            name="nameProjectSeconder"
            label="Name (Project Seconder)"
            fullWidth
            variant="standard"
            value={formFields.nameProjectSeconder}
            onChange={handleOnChange}
          />
          <TextField
            id="nrcProjectSeconder"
            name="nrcProjectSeconder"
            label="N.R.C"
            fullWidth
            variant="standard"
            value={formFields.nrcProjectSeconder}
            onChange={handleOnChange}
          />
          <TextField
            id="addressProjectSeconder"
            name="addressProjectSeconder"
            label="Address"
            fullWidth
            variant="standard"
            value={formFields.addressProjectSeconder}
            onChange={handleOnChange}
          />
          <TextField
            id="phoneProjectSeconder"
            name="phoneProjectSeconder"
            label="Phone"
            type="phone"
            fullWidth
            variant="standard"
            value={formFields.phoneProjectSeconder}
            onChange={handleOnChange}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  inputFormat="MM/dd/yyyy"
                  value={dateSignedSeconderValue}
                  onChange={(newValue) => {
                    setDateSignedSeconderValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
