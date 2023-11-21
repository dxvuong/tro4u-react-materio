import React from 'react'
import HeaderComponent from '../header/page'
import Typography from '@mui/material/Typography'
import Footer from '../footer/page'
import Button from '@mui/material/Button'
import "./page.scss"
import HeaderDisableComponent from '../HeaderDisable/page'
const page = () => {
  return (
    <div className="container">

      <HeaderDisableComponent />
      <div className="main">
        <div className='newUser-container'>
          <div className="content">
            <Typography className='text'>Bạn chưa có nhà vui lòng nhấn để tạo nhà </Typography>
            <Typography className='text'>Vui lòng nhấn để tạo nhà </Typography>
            <Button variant="contained" className='btn'>tạo nhà</Button>
          </div>

        </div>
      </div>
      <Footer />


    </div>

  )
}

export default page