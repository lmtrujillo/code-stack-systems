import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { UserTableProps } from './types';

const UserTable: React.FC<UserTableProps> = ({ users, darkMode }) => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 2 },
    { field: 'email', headerName: 'Email', flex: 3 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
  ];

  const rows = users.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email,
    gender: user.gender,
  }));

  return (
    <div
      style={{
        height: 'calc(100vh - 64px)',
        width: '100%',
        backgroundColor: darkMode ? '#212121' : 'initial',
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pagination
        autoPageSize
      />
    </div>
  );
};

export default UserTable;
