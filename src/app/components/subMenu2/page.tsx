import Link from "next/link";
import React from "react";
import "../subMenu/page.scss";
import Groups2Icon from '@mui/icons-material/Groups2';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
const SubMenu2 = () => {
  return (
    <div className="subMenu-container">
      <div className="subMenu-list">
        <div className="subMenu-items">
          <Link className="subMenu-item" href="#">
            <Groups2Icon/>
            Quản lý khách
          </Link>
          <Link className="subMenu-item" href="#">
            <ImportContactsIcon/>
            Quản lý thu chi
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default SubMenu2;
