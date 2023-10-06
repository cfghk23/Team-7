import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'progress',
    headerName: 'Progress',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 12, progress: '10/20' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 8, progress: '18/20' },
  { id: 3, lastName: 'Lee', firstName: 'Jaime', age: 9, progress: '11/20' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 10, progress: '19/20' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 13, progress: ' 1/20' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 9, progress: ' 9/20' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 9, progress: '11/20' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 10, progress: ' 5/20' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 12, progress: ' 14/20' },
];

export default function DashboardProgress() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}