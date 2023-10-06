import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import SideBarForTeacher from '../Componnt/SideBarForTeacher'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
export function Dashboard() {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar> 
         <SideBarForTeacher></SideBarForTeacher>
         <AccountCircleIcon></AccountCircleIcon>
        
          <Typography variant='h6'>Teacher's Dashboard</Typography>
        </Toolbar>
        
      </AppBar>

      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid item xs={12} md={6} lg={3}>
          <Paper style={{ padding: 16 }}>
            <Typography variant='h6'>Item 1</Typography>
            {/* Add more content for Item 1 here */}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Paper style={{ padding: 16 }}>
            <Typography variant='h6'>Item 2</Typography>
            {/* Add more content for Item 2 here */}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Paper style={{ padding: 16 }}>
            <Typography variant='h6'>Item 3</Typography>
            {/* Add more content for Item 3 here */}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <Paper style={{ padding: 16 }}>
            <Typography variant='h6'>Item 4</Typography>
            {/* Add more content for Item 4 here */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
