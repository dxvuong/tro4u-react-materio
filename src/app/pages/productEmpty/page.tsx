import WrappComponent from '@/app/components/Wrapp/page'
import React from 'react'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import Button from '@mui/material/Button';
import "./page.scss"
import ProductDetail from '../productDetail/page';
const ProductEmpty = () => {
    return (

        <ProductDetail>
            <div className='productEmpty-container'>
                <div className="productEmpty-wrapp">
                    <div className="productEmpty-item">
                        <Button fullWidth variant='contained' className='btn'>Tạo hợp đồng cọc</Button>
                    </div>
                    <div className="productEmpty-item">
                        <Button fullWidth variant='contained' className=' btn bg-primary'>Tạo hợp đồng thuê</Button>
                    </div>
                </div>
            </div>
        </ProductDetail>
    )
}

export default ProductEmpty