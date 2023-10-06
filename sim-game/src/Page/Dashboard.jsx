import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import SideBarForTeacher from '../Componnt/SideBarForTeacher'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DashboardProgress from './DashboardProgress'
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
        
         <DashboardProgress></DashboardProgress>

      </Grid>
    </div>
  )
}
