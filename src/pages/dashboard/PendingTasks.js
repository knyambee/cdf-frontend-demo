import PropTypes from 'prop-types';
import {useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import api from 'api/api';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';


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

// ==============================|| PENDING TASKS TABLE - HEADER CELL ||============================== //

const headCells = [
    {
        id: 'referenceNo',
        align: 'left',
        disablePadding: false,
        label: 'Task ID'
    },
    {
        id: 'task',
        align: 'left',
        disablePadding: true,
        label: 'Task'
    },
    {
        id: 'dateSubmitted',
        align: 'left',
        disablePadding: false,
        label: 'Date Submitted'
    },
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

// ==============================|| PENDING TASKS TABLE ||============================== //

export default function PendingTasks() {
    const [order] = useState('asc');
    const [orderBy] = useState('referenceNo');
    const [selected] = useState([]);
    const [userTasks, setUserTasks] = useState([]);

    useEffect(() => {
        const fetchAssignedTasks = async () => {
            const response = await api.get(`/tasks/?assignee=${localStorage.getItem('userId')}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem("bearer-token")}` } });
            setUserTasks(response.data);
        }
        fetchAssignedTasks();
    }, []);

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
                <Table>
                    <PendingTasksTableHead order={order} orderBy={orderBy} />
                    <TableBody>
                        {stableSort(userTasks, getComparator(order, orderBy)).map((row, index) => {
                            const isItemSelected = isSelected(row.taskId);
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
                                        <Link color="secondary" component={RouterLink} to={`/approve/${row.taskId}`} state={{
                                            data: userTasks.find(x => x.taskId === `${row.taskId}`)
                                        }}>
                                            {row.taskId}
                                        </Link>
                                    </TableCell>
                                    <TableCell align="left">{row.taskName}</TableCell>
                                    <TableCell align="left">{row.dateCreated}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}