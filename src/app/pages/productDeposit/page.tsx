import React from 'react'
import ProductDetail from '../productDetail/page'
import Button from '@mui/material/Button'
import "./page.scss"
const ProductDeposit = () => {
    return (
        <ProductDetail>
            <div className="productDeposit-container">
                <div className="left">
                    <div className="top">
                        <div className="title">
                            <h3>cọc giữ chỗ</h3>
                        </div>
                        <div className="actions">
                            <Button variant="contained" className='bg-green'>Cho thuê</Button>
                            <Button variant="contained" className='bg-or'>Đổi</Button>
                            <Button variant="contained" className='bg-red'>Hủy</Button>
                            <Button variant="contained" className='bg-blue'>Sửa</Button>
                        </div>
                    </div>
                    <div className="info-wrapp">
                        <div className='info'>
                            <span className='label'>Tên khách: </span>
                            <span className='value'>Lâm Sang </span>
                        </div>
                        <div className='info'>
                            <span className='label'>Điện thoại: </span>
                            <span className='value'>0909987542 </span>
                        </div>
                        <div className='info'>
                            <span className='label'>Giữ đến: </span>
                            <span className='value'>09/11/2023 </span>
                        </div>
                        <div className='info'>
                            <span className='label'>Tính tiền từ: </span>
                            <span className='value'>09/11/2023 </span>
                        </div>
                        <div className='info'>
                            <span className='label'>Thời gian HĐ: </span>
                            <span className='value'>1_thang </span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="title">
                            <h3>tiền cọc</h3>
                        </div>
                        <div className="action">
                            <Button variant='contained' className='btn'>Thêm cọc</Button>
                        </div>
                    </div>
                    <div className='content'>
                        <span className='price'>500.000</span>
                        <span className='date'>09/11/2023 BOSS Hiệp</span>
                        <Button variant='outlined' className='btn'>Cập nhật</Button>
                    </div>

                </div>
                <div className="right">
                    <div className="title">
                        <h3>bảng giá</h3>
                    </div>
                    <div className="info-wrapp">
                        <div className="info-left">
                            <div className="item">
                                <span className='label'>Tiền thuê:</span>
                                <span className='value bold'>2.200.000</span>
                            </div>
                            <div className="item">
                                <span className='label'>Rác:</span>
                                <span className='value'>50.000</span>
                            </div>
                            <div className="item">
                                <span className='label'>Điện:</span>
                                <span className='value'>3.500</span>
                            </div>
                            <div className="item">
                                <span className='label'>Net:</span>
                                <span className='value'>100.000</span>
                            </div>
                        </div>
                        <div className="info-right">
                            <div className="item">
                                <span className='label'>Nước:</span>
                                <span className='value'>80.000</span>
                            </div>
                            <div className="item">
                                <span className='label'>Xe:</span>
                                <span className='value'>100.000</span>
                            </div>
                            <div className="item">
                                <span className='label'>Khác:</span>
                                <span className='value'>0</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </ProductDetail>
    )
}

export default ProductDeposit