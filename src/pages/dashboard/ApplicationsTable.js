import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import api from '../../api/api';

const columns = [
  { field: 'referenceNo', headerName: 'Reference No' },
  { field: 'fundType', headerName: 'Fund' },
  { field: 'dateSubmitted', headerName: 'Date Submitted' },
  { field: 'status', headerName: 'Status' },
  { field: 'amount', headerName: 'Amount' }
];




export default function ApplicationsTable() {
  const [recentApplications, setRecentApplications] = React.useState([]);

  React.useEffect(() => {
    const fetchRecentApplications = async () => {
      const response = await api.get(`/recentapplications/search/findByUserId?userId=${localStorage.getItem('userId')}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem("bearer-token")}` } });
      setRecentApplications(response.data._embedded.fundses);
    }
    fetchRecentApplications();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={recentApplications}
        columns={columns}
        getRowId={(recentApplications) => recentApplications.referenceNo}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}