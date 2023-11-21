import React from 'react'
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import Button from '@mui/material/Button';
import "./page.scss"
interface HeaderNameRoomProps {
    name?: string | 'FA01'
}
const HeaderNameRoom = ({ name }: HeaderNameRoomProps) => {
    

    return (
        <div className='room-name'>
            <div className='name'>
                <div className='icon'>
                    <ArrowLeftRoundedIcon className='icon-aleft' />
                </div>

                <span className='title'>{name ? name : 'FA01'}</span>
            </div>
            {name ? '' : <div className='btn-search'>
                <Button variant="contained" className='btn'>Tìm</Button>
            </div>}

        </div>
    )
}

export default HeaderNameRoom