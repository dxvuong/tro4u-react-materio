import React from 'react'
import HeaderComponent from '../header/page'
import Footer from '../footer/page'
import WrappComponent from '../Wrapp/page'
import Grid from '@mui/material/Grid'
import ModalSlideUp from './ModalSlideUp'
import "./page.scss"
import ModalSlideDown from './ModalSlideDown'
import ModalSlideRight from './ModalSlideRight'
import ModalSlideLeft from './ModalSlideLeft'
import ModalZoom from './ModalZoom'
import ModalBasic from './ModalBasic'
const page = () => {
  return (
    <WrappComponent>
      <div className="modal-container">
        <Grid container spacing={2}>
        <Grid item xs={6}  lg={3}>
            <ModalBasic />
          </Grid>
          <Grid item xs={6}  lg={3}>
            <ModalSlideUp />
          </Grid>
          <Grid item xs={6} lg={3}>
            <ModalSlideDown />
          </Grid>
          <Grid item xs={6} lg={3}>
            <ModalSlideRight />
          </Grid>
          <Grid item xs={6} lg={3}>
            <ModalSlideLeft />
          </Grid>
          <Grid item xs={6} lg={3}>
            <ModalZoom />
          </Grid>
        </Grid>
      </div>
    </WrappComponent>

  )
}

export default page
