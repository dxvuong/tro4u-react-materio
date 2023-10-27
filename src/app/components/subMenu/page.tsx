import Link from "next/link";
import React from "react";
import "./page.scss";
import GroupIcon from "@mui/icons-material/Group";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
const SubMenu = () => {
  return (
    <div className="subMenu-container">
      <div className="subMenu-list">
        <div className="subMenu-items">
          <Link className="subMenu-item" href="/guestReport">
            <GroupIcon />
            Khách Hàng
          </Link>
          <Link className="subMenu-item" href="/income">
            <AutoStoriesIcon />
            Thu chi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;

// import Link from 'next/link'
// import React from 'react'
// import "./page.scss"
// interface MenuItem {
//     id: any,
//     title: any
// }

// interface SubMenuProps {
//     dataMenu: MenuItem[];
// }

// const SubMenu:React.FC<SubMenuProps> = ({dataMenu}) => {
//   return (
//     <div className='subMenu-container'>
//         <div className="subMenu-list">
//             <div className="subMenu-items">
//                 {dataMenu.map((item) => {
//                     return (
//                         <Link className='subMenu-item' href="#" key={item.id} >
//                             <span>{item.title}</span>
//                         </Link>
//                     )
//                 })}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default SubMenu
