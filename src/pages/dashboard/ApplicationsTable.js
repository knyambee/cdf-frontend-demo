import PropTypes from 'prop-types';
import { useState, useEffect, React } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import api from 'api/api';

// material-ui
import { Box, Link, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

// third-party
import NumberFormat from 'react-number-format';

// project import
import Dot from 'components/@extended/Dot';


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

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //

const headCells = [
  {
    id: 'referenceNo',
    align: 'left',
    disablePadding: false,
    label: 'Reference Number'
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: true,
    label: 'Fund Type'
  },
  {
    id: 'dateSubmitted',
    align: 'left',
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
    label: 'Amount'
  }
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function RecentApplicationsTableHead({ order, orderBy }) {
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

RecentApplicationsTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string
};

// ==============================|| USER APPLICATIONS TABLE - STATUS ||============================== //

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

export default function ApplicationsTable() {
  const [order] = useState('asc');
  const [orderBy] = useState('referenceNo');
  const [selected] = useState([]);
  const [recentApplications, setRecentApplications] = useState([]);


  useEffect(() => {
    const fetchRecentApplications = async () => {
      const response = await api.get(`/recentapplications/search/findByUserId?userId=${localStorage.getItem('userId')}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem("bearer-token")}` } });
      setRecentApplications(response.data._embedded.fundses);
    }
    fetchRecentApplications();
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
          <RecentApplicationsTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(recentApplications, getComparator(order, orderBy)).map((row, index) => {
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
                    <Link color="secondary" component={RouterLink} to=''>
                      {row.referenceNo}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{row.fundType}</TableCell>
                  <TableCell align="left">{row.dateSubmitted}</TableCell>
                  <TableCell align="left">
                    <OrderStatus status={row.status} />
                  </TableCell>
                  <TableCell align="right">
                    <NumberFormat value={row.amount} displayType="text" thousandSeparator prefix="ZMK" />
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