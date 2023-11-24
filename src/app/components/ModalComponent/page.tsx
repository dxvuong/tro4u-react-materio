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
import Typography from '@mui/material/Typography'
import ModalLarge from './ModalLarge'
const page = () => {
  return (
    <WrappComponent>
      <div className="modalComponent-container">
        <h2 style={{ textAlign: "left" }}>Basic Modal</h2>
        <div className="wrapp">

          <div className="item">
            <ModalBasic />
          </div>
          <div className="item">
            <ModalSlideUp />
          </div>
          <div className="item">
            <ModalSlideDown />
          </div>
          <div className="item">
            <ModalSlideLeft />
          </div>
          <div className="item">
            <ModalSlideRight />
          </div>
          <div className="item">
            <ModalZoom />
          </div>
        </div>
        <h2 style={{ textAlign: "left" }}>Size Modal</h2>
        <div className="wrapp">
          <div className="item">
            <ModalBasic />
          </div>
          <div className="item">
            <ModalLarge />
          </div>
        </div>

        {/* <Grid container spacing={2}>
          <Grid item xs={6} lg={12}>
            <Typography sx={{ textAlign: "left" }} >Modal Basic</Typography>
          </Grid>
          <Grid item xs={6} lg={2}>
            <ModalBasic />
          </Grid>
          <Grid item xs={6} lg={2}>
            <ModalSlideUp />
          </Grid>
          <Grid item xs={6} lg={2}>
            <ModalSlideDown />
          </Grid>
          <Grid item xs={6} lg={2}>
            <ModalSlideRight />
          </Grid>
          <Grid item xs={6} lg={2}>
            <ModalSlideLeft />
          </Grid>
          <Grid item xs={6} lg={2}>
            <ModalZoom />
          </Grid>
          <Grid item xs={6} lg={12}>
            <Typography sx={{ textAlign: "left" }} >Size Modal</Typography>
          </Grid>
          <Grid item xs={6} lg={3}>
            <ModalLarge />
          </Grid>
        </Grid> */}
      </div>
    </WrappComponent>

  )
}

export default page
