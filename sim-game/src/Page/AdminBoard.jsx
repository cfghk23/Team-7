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
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'

export function AdminBoard() {
  const [courses, setCourses] = useState([])

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const [formData, setFormData] = useState({
    topic: '',
    target: '',
    time:'',
    File:''
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    // console.log(formData)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
        <Grid
          container
          spacing={3}
          style={{ marginTop: 20 }}
          direction='row'
          margin={1}
        >
          {courses.map((material, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 280 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/d9/b7a0d0ff9c11e6b4394f01375dc7b5/FAFLogo.jpg?auto=format%2Ccompress&dpr=1'
                  title='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {`Topic: ${material.topic}`}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {`Target students: ${material.target}`}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {`Recommended Study Time: ${material.time}`}
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
        <Button variant='outlined' onClick={handleClickOpen}>
          Add Course
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>Add course here</DialogContentText>
            <TextField
              margin='normal'
              required
              fullWidth
              id='topic'
              label='topic'
              name='topic'
              onChange={handleChange}
            />

            <TextField
              margin='normal'
              required
              fullWidth
              name='target'
              label='target'
              id='target'
              onChange={handleChange}
            />

            <TextField
              margin='normal'
              required
              fullWidth
              name='time'
              label='time'
              id='time'
              onChange={handleChange}
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='File'
              label='File'
              id='File'
              onChange={handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleAddCourse(formData)}>Add</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </div>
  )
}
