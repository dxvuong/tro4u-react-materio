import React, { ReactNode } from 'react'

import WrappComponent from '@/app/components/Wrapp/page';
import HeaderNameRoom from '@/app/components/HeaderNameRoom/page';

interface ProductDetailProps {
    children: ReactNode
}
const ProductDetail = ({children}: ProductDetailProps) => {
    return (
        <WrappComponent>
            <div className='productDetail-container'>
                <HeaderNameRoom />
                {children}
            </div>
        </WrappComponent>

    )
}

export default ProductDetail