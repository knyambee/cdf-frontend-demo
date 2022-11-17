import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import Moment from 'moment';

// project import
import Dot from 'components/@extended/Dot';

function createData(referenceNo, fund, applicant, dateSubmitted, stage) {
    return { referenceNo, fund, applicant, dateSubmitted, stage };
}

const rows = [
    createData(84564564, 'Community Project', 'Kelvin Nyambe',Moment().format('DD-MM-YYYY'), "Approval"),
    createData(98764564, 'Loan Emporwement', 'John Doe', Moment().format('DD-MM-YYYY'), "Evaluate"),
    createData(98756325, 'Grant', 'Paul Banda', Moment().format('DD-MM-YYYY'), "Approval"),
    createData(98652366, 'Skills Development Bursary', 'LCC', Moment().format('DD-MM-YYYY'), "Approval"),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

// ==============================|| APPLICATIONS TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'referenceNo',
        align: 'left',
        disablePadding: false,
        label: 'Reference No.'
    },
    {
        id: 'fund',
        align: 'left',
        disablePadding: true,
        label: 'Funding'
    },
    {
        id: 'applicant',
        align: 'left',
        disablePadding: true,
        label: 'Applicant'
    },
    {
        id: 'date',
        align: 'left',
        disablePadding: false,
        label: 'Date Submitted'
    },
    {
        id: 'stage',
        align: 'left',
        disablePadding: false,
        label: 'Stage'
    }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function PendingTasksTableHead({ order, orderBy }) {
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

PendingTasksTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
    let color;
    let title;

    switch (status) {
        case 0:
            color = 'warning';
            title = 'Pending';
            break;
        case 1:
            color = 'success';
            title = 'Approved';
            break;
        case 2:
            color = 'error';
            title = 'Rejected';
            break;
        default:
            color = 'primary';
            title = 'None';
    }

    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <Dot color={color} />
            <Typography>{title}</Typography>
        </Stack>
    );
};

OrderStatus.propTypes = {
    status: PropTypes.number
};

// ==============================|| ORDER TABLE ||============================== //

export default function PendingTasksTable() {
    const [order] = useState('asc');
    const [orderBy] = useState('referenceNo');
    const [selected] = useState([]);

    const isSelected = (referenceNo) => selected.indexOf(referenceNo) !== -1;

    return (
        <Box>
            <TableContainer
                sx={{
                    width: '100%',
                    overflowX: 'auto',
                    position: 'relative',
                    display: 'block',
                    maxWidth: '100%',
                    '& td, & th': { whiteSpace: 'nowrap' }
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    sx={{
                        '& .MuiTableCell-root:first-child': {
                            pl: 2
                        },
                        '& .MuiTableCell-root:last-child': {
                            pr: 3
                        }
                    }}
                >
                    <PendingTasksTableHead order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.referenceNo);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.referenceNo}
                                    selected={isItemSelected}
                                >
                                    <TableCell component="th" id={labelId} scope="row" align="left">
                                        <Link color="secondary" component={RouterLink} to="">
                                            {row.referenceNo}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">{row.fund}</TableCell>
                                    <TableCell align="left">{row.applicant}</TableCell>
                                    <TableCell align="left">{row.dateSubmitted}</TableCell>
                                    <TableCell align="left">{row.stage}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}