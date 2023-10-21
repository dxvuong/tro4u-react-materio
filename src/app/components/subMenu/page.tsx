import Link from 'next/link'
import React from 'react'
import "./page.scss"
interface MenuItem {
    id: number,
    title: string
} 

interface SubMenuProps {
    dataMenu: MenuItem[]
}

const SubMenu = ({dataMenu} : SubMenuProps) => {
  return (
    <div className='subMenu-container'>
        <div className="subMenu-list">
            <div className="subMenu-items">
                {dataMenu.map((item) => {
                    return (
                        <Link className='subMenu-item' href="#" key={item.id} >
                            <span>{item.title}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default SubMenu