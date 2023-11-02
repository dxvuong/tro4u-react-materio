import React from 'react'
import "./page.scss"
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import HeaderComponent from '../header/page'
import Footer from '../footer/page'
const NewuserPage = () => {
  return (
    <div className="container">
      <HeaderComponent />
      <div className="main">
        <div className='newUser-container'>
          <div className="content">
            <Typography className='text'>Nhà chưa có sản phẩm nào vui lòng nhấn để tạo sản phẩm </Typography>
            <Typography className='text'>Vui lòng nhấn để tạo sản phẩm </Typography>
            <Button variant="contained" className='btn'>tạo sản phẩm</Button>
          </div>

        </div>
      </div>
      <Footer />
    </div>

  )
}

export default NewuserPage