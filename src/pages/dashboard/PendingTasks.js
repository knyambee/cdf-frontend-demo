import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import api from '../../api/api';

const columns = [
  { field: 'id', headerName: 'Reference No' },
  { field: 'name', headerName: 'Fund' },
  { field: 'dateCreated', headerName: 'Date Submitted' }
//   { field: 'status', headerName: 'Status' },
//   { field: 'amount', headerName: 'Amount' }
];




export default function PendingTasks() {
  const [userTasks, setUserTasks] = React.useState([]);

  React.useEffect(() => {
    const fetchAssignedTasks = async () => {
      const response = await api.get(`/tasks/?assignee=${localStorage.getItem('userId')}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem("bearer-token")}` } });
      setUserTasks(response.data);
    }
    fetchAssignedTasks();
  }, []);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={userTasks}
        columns={columns}
        getRowId={(userTasks) => userTasks.id}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}