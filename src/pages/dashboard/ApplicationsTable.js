import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';
import api from 'api/api';

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
        label: 'Fund'
    },
    {
        id: 'date',
        align: 'right',
        disablePadding: false,
        label: 'Date Submitted'
    },
    {
        id: 'status',
        align: 'left',
        disablePadding: false,

        label: 'Status'
    },
    {
        id: 'amount',
        align: 'right',
        disablePadding: false,
        label: 'Total Amount'
    }
];

// ==============================|| APPLICATIONS TABLE - HEADER ||============================== //

function ApplicationsTableHead({ order, orderBy }) {
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

ApplicationsTableHead.propTypes = {
    order: PropTypes.string,
    orderBy: PropTypes.string
};

// ==============================|| APPLICATIONS TABLE - STATUS ||============================== //

const ApplicationStatus = ({ status }) => {
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

ApplicationStatus.propTypes = {
    status: PropTypes.number
};

// ==============================|| APPLICATIONS TABLE ||============================== //

export default function ApplicationTable() {
    const [order] = useState('asc');
    const [orderBy] = useState('referenceNo');
    const [selected] = useState([]);
    const [userApplications, setUserApplications] = useState([]);

    const isSelected = (referenceNo) => selected.indexOf(referenceNo) !== -1;

    // useEffect(() => {
    //     const fetchUserApplications = async () => {
    //         try {
    //             const response = await api.get('/communityprojects', {headers: {'Authorization': `Bearer ${localStorage.getItem("bearer-token")}`}});
    //             setUserApplications(response.data._embedded.communityProjectses[0]);
    //         } catch (error) {
    //             console.log(`Error ${error.response.data}`);
    //         }
    //     }
    //     fetchUserApplications();
    // }, []);

     
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
                    <ApplicationsTableHead order={order} orderBy={orderBy} />
                    <TableBody>
                        {userApplications.map((application, index) => {
                            const isItemSelected = isSelected(userApplications.referenceNo);
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={index}
                                    selected={isItemSelected}
                                >
                                    <TableCell component="th" id={labelId} scope="row" align="left">
                                        <Link color="secondary" component={RouterLink} to="">
                                            {application.userId}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">{application.nameProjectSeconder}</TableCell>
                                    <TableCell align="right">{application.date}</TableCell>
                                    <TableCell align="left">
                                        <ApplicationStatus status={application.status} />
                                    </TableCell>
                                    <TableCell align="right">
                                        <NumberFormat value={application.estimatedCost} displayType="text" thousandSeparator prefix="ZMK" />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
