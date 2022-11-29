import React, { useState, useEffect } from "react";
import EmpowermentLoanApprovalForm from "pages/forms/admin/EmpowermentLoanApprovalForm";
import EmpowermentGrantApprovalForm from "pages/forms/admin/EmpowermentGrantApprovalForm";
import CommunityProjectApprovalForm from "pages/forms/admin/CommunityProjectApprovalForm";
import SkillsTrainingBursaryApprovalForm from "pages/forms/admin/SkillsTrainingBursaryApprovalForm";
import SecondaryBoardingBursaryApprovalForm from "pages/forms/admin/SecondaryBoardingBursaryApprovalForm";
import { useParams, useLocation } from "react-router";

const Approve = () => {
    const { state } = useLocation();
    const { taskId } = useParams();
    const fundType = state.data.taskName;

    const [approvalForm, setApprovalForm] = useState("");

    const [communityProjectFormVisible, setCommunityProjectFormVisible] =
        useState(false);
    const [emporwerentGrantFormVisible, setEmporwerentGrantFormVisible] =
        useState(false);
    const [empowermentLoanFormVisible, setEmpowermentLoanFormVisible] =
        useState(false);
    const [
        SecondaryBoardingBursaryFormVisible,
        setSecondaryBoardingBursaryFormVisible,
    ] = useState(false);
    const [
        skillsTrainingBursaryFormVisible,
        setSkillsTrainingBursaryFormVisible,
    ] = useState(false);

    const handleApprovalForm = () => {
        if (fundType.includes("Grant")) {
            setApprovalForm("empowermentGrant");
        } else if (fundType.includes("Project")) {
            setApprovalForm("communityProject");
        } else if (fundType.includes("Loan")) {
            setApprovalForm("empowermentLoan")
        } else if (fundType.includes("Skills")) {
            setApprovalForm("skillsDevelopmentBursary");
        } else {
            setApprovalForm("secondaryBoardingBursary");
        }
    }

    useEffect(() => {

        handleApprovalForm();

        approvalForm === "communityProject"
            ? setCommunityProjectFormVisible(true)
            : setCommunityProjectFormVisible(false);
        approvalForm === "empowermentGrant"
            ? setEmporwerentGrantFormVisible(true)
            : setEmporwerentGrantFormVisible(false);
        approvalForm === "empowermentLoan"
            ? setEmpowermentLoanFormVisible(true)
            : setEmpowermentLoanFormVisible(false);
        approvalForm === "secondaryBoardingBursary"
            ? setSecondaryBoardingBursaryFormVisible(true)
            : setSecondaryBoardingBursaryFormVisible(false);
        approvalForm === "skillsDevelopmentBursary"
            ? setSkillsTrainingBursaryFormVisible(true)
            : setSkillsTrainingBursaryFormVisible(false);
    }, [approvalForm]);

    return (
        <main>
            {communityProjectFormVisible && <CommunityProjectApprovalForm taskId={taskId} formFields={state.data.taskDetails} />}
            {emporwerentGrantFormVisible && <EmpowermentGrantApprovalForm taskId={taskId} formFields={state.data.taskDetails} />}
            {empowermentLoanFormVisible && <EmpowermentLoanApprovalForm taskId={taskId} formFields={state.data.taskDetails} />}
            {SecondaryBoardingBursaryFormVisible && <SecondaryBoardingBursaryApprovalForm taskId={taskId} formFields={state.data.taskDetails} />}
            {skillsTrainingBursaryFormVisible && <SkillsTrainingBursaryApprovalForm taskId={taskId} formFields={state.data.taskDetails} />}
        </main>
    );
};

export default Approve;
