import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { ListItemText,ListItem,List,LinearProgress,Typography,Container } from '@mui/material';

const columns= [
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

const students = [
  {
    id: 1,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 12,
    progress: 80,
    quizzesCompleted: 8,
  },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
    age: 8,
    progress: 50,
    quizzesCompleted: 5,
    totalTimeTaken: 10,
    totalTimeTaken0: 100,
  },
  {
    id: 3,
    lastName: 'Lee',
    firstName: 'Jaime',
    age: 9,
    progress: 10,
    quizzesCompleted: 1,
    totalTimeTaken: 1,
    totalTimeTaken0: 10,
  },
  {
    id: 4,
    lastName: 'Stark',
    firstName: 'Arya',
    age: 10,
    progress: 20,
    quizzesCompleted: 5,
    totalTimeTaken: 4,
    totalTimeTaken0: 40,
  },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
    age: 13,
    progress: 90,
    quizzesCompleted: 9,
    totalTimeTaken: 10,
    totalTimeTaken0: 100,
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: 'Cliff',
    age: 9,
    progress: 75,
    quizzesCompleted: 7,
    totalTimeTaken: 8,
    totalTimeTaken0: 80,
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
    age: 9,
    progress: 60,
    quizzesCompleted: 6,
    totalTimeTaken: 7,
    totalTimeTaken0: 70,
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
    age: 10,
    progress: 80,
    quizzesCompleted: 8,
    totalTimeTaken: 7,
    totalTimeTaken0: 70,
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
    age: 12,
    progress: 70,
    quizzesCompleted: 7,
    totalTimeTaken: 5,
    totalTimeTaken0: 50,
  },
]

const DashboardProgress = () => {
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' align='center' gutterBottom>
        Quiz Progress Dashboard
      </Typography>

      {students.map((student, index) => (
        <Box key={index} mb={2}>
          <Typography variant='subtitle1'>{student.firstName}</Typography>
          <LinearProgress variant='determinate' value={student.progress} />
          <List dense>
            <ListItem>
              <ListItemText
                primary={`Quizzes Completed: ${student.quizzesCompleted}`}
              />
            </ListItem>
          </List>
        </Box>
      ))}
    </Container>
  )
};

export default DashboardProgress;
