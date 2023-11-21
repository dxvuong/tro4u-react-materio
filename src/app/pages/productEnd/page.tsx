import React from 'react'
import ProductDetail from '../productDetail/page'
import Button from '@mui/material/Button'
import "./page.scss"
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Image from 'next/image'
import hoadon from "../../../../public/assets/img/hoadon.png"
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import Paper from '@mui/material/Paper'
const ProductEnd = () => {
  return (
    <ProductDetail>
      <div className="productHire-container">
        <div className="left">
          <div className="top">
            <div className="title">
              <h2 style={{ fontWeight: 500, fontSize: "16px" }}>hợp đồng</h2>
              <h2 style={{ color: "#9728EF", fontSize: "16px" }}>báo trả</h2>
              <h2 style={{ color: "#9728EF", fontSize: "16px" }}>otp: 7422</h2>
            </div>
            <div className="actions">
              <Button variant='outlined' style={{ border: "1px solid black", color: "black", fontWeight: "700" }}>Gia hạn</Button>
              <Button variant='contained' style={{ backgroundColor: "#F1B53D", fontWeight: "700" }}>B.Trả</Button>
              <Button variant='contained' style={{ backgroundColor: "#FF5D48", fontWeight: "700" }}>T.Lý</Button>
              
              <Button variant='contained' style={{ backgroundColor: "#0F9DF7", fontWeight: "700" }}>Sửa</Button>
            </div>
          </div>

          <div className="guest-container">
            <Divider sx={{ margin: "20px 0 0 0" }} />
            <div className="guest-wrapp">
              <div className="avatar">
                <Avatar src="/broken-image.jpg" />
              </div>

              <div className="info">
                <div className="info-top">nguyễn thanh tài</div>
                <div className="info-bottom">1992 - CCCD: 0511000011411 - V.Tay</div>
              </div>

              <div className="info-code">
                <span>0965234978</span>
                <span>65L1-111.11</span>
              </div>

            </div>
            <Divider sx={{ margin: "20px 0 0 0" }} />
            <div className="guest-wrapp">
              <div className="avatar">
                <Avatar src="/broken-image.jpg" />
              </div>

              <div className="info">
                <div className="info-top">nguyễn thanh tài</div>
                <div className="info-bottom">1992 - CCCD: 0511000011411-V.Tay</div>
              </div>

              <div className="info-code">
                <span>0965234978</span>
                <span>65L1-111.11</span>
              </div>

            </div>
            <Divider sx={{ margin: "20px 0 0 0" }} />
            <Button variant='outlined' sx={{ width: "fit-content", margin: "20px auto 0" }}>Thêm khách</Button>
          </div>

          <div className="contact">
            <div className="info-contact">
              <div className="info-wrapp">
                <span className='label'>Mã HĐ:</span>
                <span className='value'>#23002523</span>
              </div>
              <div className="info-wrapp">
                <span className='label'>Hợp đồng:</span>
                <span className='value'>từ 05/09/2023 - <span style={{ fontWeight: "bold" }}>05/03/2024</span> </span>
              </div>
              <div className="info-wrapp">
                <span className='label'>Thời gian HĐ:</span>
                <span className='value' style={{ fontWeight: "bold", color: "#A9A9A9" }}>6_thang</span>
              </div>
              <div className="info-wrapp">
                <span className='label'>Đã ở:</span>
                <span className='value'> <span style={{ fontWeight: "bold" }}>0</span> năm <span style={{ fontWeight: "bold" }}>2</span> tháng <span style={{ fontWeight: "bold" }}>5</span> ngày</span>
              </div>
              <div className="info-wrapp">
                <span className='label'>Thanh toán:</span>
                <span className='value' style={{ color: "#FF0000", fontWeight: 700 }}>ngày 1-3</span>
              </div>
              <div className="info-wrapp">
                <span className='label'>Tổng cọc:</span>
                <span className='value' style={{ color: "#0000FF", fontWeight: 700 }}>2.200.000</span>
              </div>
            </div>
            <div className="img-contact">
              <div className="img-wrapp">
                <Image src={hoadon} width={80} height={80} alt='img' />
              </div>
              <div className="img-wrapp">
                <Image src={hoadon} width={80} height={80} alt='img' />
              </div>
              <div className="img-wrapp">
                <Image src={hoadon} width={80} height={80} alt='img' />
              </div>
              <div className="img-wrapp">
                <Image src={hoadon} width={80} height={80} alt='img' />
              </div>
            </div>
          </div>
          <div className="price">
            <div className="top">
              <h2 style={{ fontSize: "18px", fontWeight: 600 }}>Giá thuê</h2>
              <Button variant='contained' sx={{ width: "fit-content", backgroundColor: "#0F9DF7", color: "#fff", fontWeight: 700, textTransform: "math-auto" }}>Cập nhật</Button>
            </div>
            <div className="bottom">
              <div className="info-container">
                <div className="info-wrapp">
                  <div className="label" >Tiền thuê:</div>
                  <div className="value" style={{ fontWeight: "bold" }}>2.200.000</div>
                </div>
                <div className="info-wrapp">
                  <div className="label">Điện:</div>
                  <div className="value">3.500</div>
                </div>
                <div className="info-wrapp">
                  <div className="label">Nước:</div>
                  <div className="value">80.000</div>
                </div>
                <div className="info-wrapp">
                  <div className="label">Khác:</div>
                  <div className="value">0</div>
                </div>
              </div>
              <div className="info-container">
                <div className="info-wrapp">
                  <div className="label">Rác:</div>
                  <div className="value">50.000</div>
                </div>
                <div className="info-wrapp">
                  <div className="label">Net:</div>
                  <div className="value">100.000</div>
                </div>
                <div className="info-wrapp">
                  <div className="label">Xe:</div>
                  <div className="value">100.000</div>
                </div>
              </div>

            </div>
          </div>
          <div className="furniture">
            <div className="top">
              <h2>nội thất bàn giao</h2>
              <Button variant='contained' sx={{ width: "fit-content", backgroundColor: "#0F9DF7", color: "#fff", fontWeight: 700, textTransform: "math-auto" }}>Cập nhật</Button>
            </div>
            <div className="bottom">
              <div className="list">
                <span className="item">Tủ lạnh</span>
                <span className="quantity">1</span>
              </div>

              <Divider sx={{ backgroundColor: "#F5F5F5" }} />
              <div className="list">
                <span className="item">Máy giặt</span>
                <span className="quantity">1</span>
              </div>
              <Divider />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">

            <div className="title">
              <h2>hóa đơn</h2>
            </div>

            <div className="actions">
              <Button variant='contained' style={{ backgroundColor: "#3DB9DC" }}>Khác</Button>
              <Button variant='contained' style={{ backgroundColor: "#F1B53D" }}>K.M</Button>
              <Button variant='contained' style={{ backgroundColor: "#3DB9DC" }}>Cọc</Button>
              <Button variant='contained' style={{ backgroundColor: "#3DB9DC" }}>Đ.Nước</Button>
              <Button variant='contained' style={{ backgroundColor: "#3DB9DC" }}>Tháng</Button>
            </div>

          </div>
          <div className="bottom">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow className='title-row'>
                    <TableCell className='title' sx={{borderRight: "1px solid ", width: "fit-content"}}>DỊCH VỤ</TableCell>
                    <TableCell align="center" className='title'>10/2023</TableCell>
                    <TableCell align="center" className='title'>11/2023</TableCell>
                    <TableCell align="center" className='title'>12/2023</TableCell>
                    
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>$ Dư nợ cũ</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tiền cọc</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Hóa đơn</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Điện/nước</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Khác</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>K/mãi</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                  <TableRow style={{borderBottom: "3px solid #333"}}>
                    <TableCell>Phạt</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                  <TableRow style={{backgroundColor: "rgb(235 235 235)"}}>
                    <TableCell style={{color: "blue", fontWeight: 600}}>$ Tổng</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{color: "green", fontWeight: 600}}>Đã thu</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{color: "red", fontWeight: 600}}>$ Dư nợ</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tin nhắn</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                    <TableCell align='center'>0</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <div className="description">
              <p className='parap'>Dư nợ lớn hơn 0(Số dương): khách nợ mình</p>
              <p className='parap'>Dư nợ nhỏ hơn 0(Số âm): Mình nợ khách</p>
            </div>
            <div className="paymentBtn">
              <Button className='btn' variant='contained'>Thanh toán</Button>
            </div>
          </div>
        </div>
      </div>
    </ProductDetail>
  )
}

export default ProductEnd