import { Box, CircularProgress, LinearProgress } from '@mui/material'
import React from 'react'

const loading = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress color="secondary" />
    </Box>
  )
}

export default loading