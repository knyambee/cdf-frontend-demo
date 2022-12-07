import React, { useState } from 'react';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import api from 'api/api';
import approve from './ApprovalResponse';
import { useNavigate } from 'react-router-dom';
import RenderOnRole from 'security/RenderOnRole';


const theme = createTheme();

const CommunityProjectApprovalForm = ({ formFields, taskId }) => {
    const [adminResponse, setAdminResponse] = useState(approve);
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
    const [approvalOpen, setApprovalOpen] = React.useState(false);
    const [rejectionOpen, setRejectionOpen] = React.useState(false);


    const handleOnChange = (e) => {
        setComment(e.target.value);
    };


    const handleApproval = () => {
        adminResponse.id = taskId;
        adminResponse.status = true;
        adminResponse.comment = comment;
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
                        CONSTITUENCY DEVELOPMENT FUND (CDF) APPLICATION FORM FOR COMMUNITY
                        PROJECTS
                    </Typography>
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
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}

                                    value={formFields.communityName}
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
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="landTitle"
                                    name="landTitle"
                                    label="3. Land Title/Ownership (where applicable)"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}

                                    value={formFields.landTitle}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="projectType"
                                    name="projectType"
                                    label="4. Type of Project (Which sector does it fall in e.g Water, Educatation or Health)"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}

                                    value={formFields.projectType}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="numberBeneficiary"
                                    name="numberBeneficiary"
                                    label="5. Estimated population benefiting from the project"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}

                                    type="number"
                                    value={formFields.numberBeneficiary}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="communityBasedProjects"
                                    name="communityBasedProjects"
                                    label="6. Has the community been involved in any community based project before? If yes, please give details"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.communityBasedProjects}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="comunityFunding"
                                    name="comunityFunding"
                                    label="7. Has the community received any funding from any organization? (If yes which organization and when and for what activities?)"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.comunityFunding}
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
                                    label="9. Which of these problems is the proposed project trying to address and how?"
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
                                    label="10. How did the community identify the project? (Attach minutes where applicable)"
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
                                    id="doneBefore"
                                    name="doneBefore"
                                    label="11. Has anything been done before to address the problem and if any, was it successfully implemented? Yes / No"
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    fullWidth
                                    value={formFields.doneBefore}
                                ></TextField>
                                <TextField
                                    id="doneBeforeExplaination"
                                    name="doneBeforeExplaination"
                                    label="Explain"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.doneBeforeExplaination}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="beneficiaries"
                                    name="beneficiaries"
                                    label="12. State the beneficiaries of the proposed project?"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.beneficiaries}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="estimatedCost"
                                    name="estimatedCost"
                                    label="13. What is the estimated cost of the project: ZMK"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.estimatedCost}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="communityContribution"
                                    name="communityContribution"
                                    label="14. How will the Community contribute towards the cost of the project? (In terms of maintenance fees, water supply, labour etc."
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.communityContribution}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="committeMembers"
                                    name="committeMembers"
                                    label="15. List the proposed Project Committe Members:"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.committeMembers}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="communitySustainability"
                                    name="communitySustainability"
                                    label="16. How will the community ensure project sustainability?"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.communitySustainability}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="nameProjectProposer"
                                    name="nameProjectProposer"
                                    label="Name (Project Proposer)"
                                    fullWidth
                                    value={formFields.nameProjectProposer}
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                                <TextField
                                    id="nrcProjectProposer"
                                    name="nrcProjectProposer"
                                    label="N.R.C"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.nrcProjectProposer}
                                />
                                <TextField
                                    id="addressProjectProposer"
                                    name="addressProjectProposer"
                                    label="Address"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.addressProjectProposer}
                                />
                                <TextField
                                    id="phoneProjectProposer"
                                    name="phoneProjectProposer"
                                    label="Phone"
                                    type="phone"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.phoneProjectProposer}
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Date"
                                        inputFormat="MM/dd/yyyy"
                                        // value={formFields.dateSignedProposer}
                                        disabled
                                        variant="filled"
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
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.nameProjectSeconder}
                                />
                                <TextField
                                    id="nrcProjectSeconder"
                                    name="nrcProjectSeconder"
                                    label="N.R.C"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.nrcProjectSeconder}
                                />
                                <TextField
                                    id="addressProjectSeconder"
                                    name="addressProjectSeconder"
                                    label="Address"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.addressProjectSeconder}
                                />
                                <TextField
                                    id="phoneProjectSeconder"
                                    name="phoneProjectSeconder"
                                    label="Phone"
                                    type="phone"
                                    fullWidth
                                    variant="filled"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={formFields.phoneProjectSeconder}
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Date"
                                        inputFormat="MM/dd/yyyy"
                                        value={formFields.dateSignedProposer}
                                        variant="filled"
                                        renderInput={(params) => <TextField {...params} />}
                                        disabled
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
                                    onChange={handleOnChange}
                                    value={comment}
                                    multiline
                                    rows={6}
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

export default CommunityProjectApprovalForm