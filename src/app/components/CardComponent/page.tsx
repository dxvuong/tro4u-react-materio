"use client"
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import CardImgTop from './CardImgTop'
import WrappComponent from '../Wrapp/page'
import "./page.scss"
import CardUser from './CardUser'
import CardWithCollapse from './CardWithCollapse'
import CardInfluencer from './Cardbasic'
import CardAppleWatch from './CardAppleWatch'
import CardTwitter from './CardTwitter'
import CardFacebook from './CardFaceBook'
import CardLinkedIn from './CardLinkedIn'

const CardComponent = () => {
    return (
        <WrappComponent>
            <div className="card-container">
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Typography variant='h5' style={{ textAlign: "left" }}>Basic Cards</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardImgTop />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <CardUser />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <CardWithCollapse />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardInfluencer />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                        <CardAppleWatch />
                    </Grid>
                    <Grid item xs={12}  >
                        <Typography variant='h5' style={{ textAlign: "left" }}>Solid Card</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <CardTwitter />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>

                        <CardFacebook />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>

                        <CardLinkedIn />
                    </Grid>
                </Grid>
            </div>

        </WrappComponent>

    )
}

export default CardComponent