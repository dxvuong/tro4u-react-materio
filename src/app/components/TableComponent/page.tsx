"use client"
import React from 'react'
import WrappComponent from '../Wrapp/page'
import Grid from '@mui/material/Grid'
import "./page.scss"
import BasicTable from './TableBasic'
import Typography from '@mui/material/Typography'
import DataTable from './TableData'
import CustomizedTables from './TableCustom'
import CollapsibleTable from './TableWithCollapse'
import TableContactHire from './TableContactHire'

const TableBaic = () => {
    return (
        <WrappComponent>
            <div className="table-container">
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <Typography variant='h5' style={{ textAlign: "left" }}>Basic Table</Typography>
                    </Grid>
                    <Grid item xs={12} >
                        <BasicTable />
                    </Grid>
                    <Grid container item xs={12} spacing={2} >
                        <Grid item xs={12} lg={6}>
                            <CustomizedTables />
                        </Grid>
                        <Grid item xs={12} lg={6} >
                            <CollapsibleTable />
                        </Grid>
                        <Grid item xs={6} lg={6} >
                            <TableContactHire />
                        </Grid>

                    </Grid>


                </Grid>
            </div>



        </WrappComponent>
    )
}

export default TableBaic