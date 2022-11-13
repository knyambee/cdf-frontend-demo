import { getReferenceNumber } from "utils/forms-util";

const fields = {
  borrowingDate: "",
  borrower: "",
  borrowerAddress: "",
  borrowerWard: "",
  borrowerConstituency: "",
  lender: "",
  loanAmount: "",
  loanPurpose: "",
  loanAmountBenficiary: "",
  loanAmountBenficiaryInWords: "",
  paybackPeriod: "",
  bankAccount: "",
  mobileMoney: "",
  eWallet: "",
  signatoryFinanceInst: "",
  financialInstitution: "",
  dateSignedFinancialInstitution: "",
  positionSignatory: "",
  userId: localStorage.getItem('userId'),
  dateCreated: "",
  status: 0,
  referenceNo: getReferenceNumber(),
};

export { fields };
