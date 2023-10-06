import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import SideBarForTeacher from '../Componnt/SideBarForTeacher'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SideBarForAdmin from '../Componnt/SideBarForAdmin'
import { Add } from '@mui/icons-material'
import { useState } from 'react'
import { Button } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export function AdminBoard() {
   const [courses, setCourses] = useState([
     // This is just placeholder data. Replace with your own courses.
     { id: 1, name: 'Course 1', description: 'This is Course 1' },
     { id: 2, name: 'Course 2', description: 'This is Course 2' },
     { id: 3, name: 'Course 3', description: 'This is Course 3' },
   ])

   const [open, setOpen] = useState(false)

   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const handleAddCourse = (newCourse) => {
     setCourses([...courses, newCourse])
     handleClose()
   }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <SideBarForAdmin></SideBarForAdmin>
          <AccountCircleIcon></AccountCircleIcon>

          <Typography variant='h6'>Administrater's Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={3} style={{ marginTop: 20 }}>
        <Grid container spacing={3} style={{ marginTop: 20 }} direction='row'>
          {[1, 2, 3].map((topic, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/d9/b7a0d0ff9c11e6b4394f01375dc7b5/FAFLogo.jpg?auto=format%2Ccompress&dpr=1'
                  title='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {`Topic ${topic}`}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Target students: K1-K3 students Recommended Study Time: 2
                    hours
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>Modify</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid>
        <Button
          variant='contained'
          color='primary'
          startIcon={<Add />}
          style={{ marginBottom: 20, marginTop: 20 }}
        >
          Add Course
        </Button>
      </Grid>
    </div>
  )
}
