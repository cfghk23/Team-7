import React, { useState } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material'
import ReportIcon from '@mui/icons-material/Report'
import AssessmentIcon from '@mui/icons-material/Assessment'
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material'

const SideBarForAdmin = () => {
  const [open, setOpen] = useState(false)
  
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton onClick={handleDrawerOpen}>
        <MenuIcon />
      </IconButton>
      <Drawer variant='persistent' open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          <ListItem>
            <ListItemIcon>
              <AssessmentIcon></AssessmentIcon>
            </ListItemIcon>
            <ListItemText primary='Approve Registration' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AssessmentIcon></AssessmentIcon>
            </ListItemIcon>
            <ListItemText primary='Create/Add Course' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AssessmentIcon></AssessmentIcon>
            </ListItemIcon>
            <ListItemText primary='user login report' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AssessmentIcon></AssessmentIcon>
            </ListItemIcon>
            <ListItemText primary='Users report' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AssessmentIcon></AssessmentIcon>
            </ListItemIcon>
            <ListItemText primary='Activity progress report' />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <AssessmentIcon></AssessmentIcon>
            </ListItemIcon>
            <ListItemText primary='Activity completion report' />
          </ListItem>
        </List>
      </Drawer>
      <main>{/* Your main content goes here */}</main>
    </div>
  )
}

export default SideBarForAdmin
