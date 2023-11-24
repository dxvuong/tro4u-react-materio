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
          <Link className="subMenu-item" href="/guestManage">
            <Groups2Icon />
            Quản lý khách
          </Link>
          <Link className="subMenu-item" href="/incomeManage">
            <ImportContactsIcon />
            Quản lý thu chi
          </Link>
          <div className="component">
            <Link className="subMenu-item" href="/components/AlertComponent">
              <ImportContactsIcon />
              Alert
            </Link>
            <Link className="subMenu-item" href="/components/ButtonComponent">
              <ImportContactsIcon />
              Button
            </Link>
            <Link className="subMenu-item" href="/components/CheckboxComponent">
              <ImportContactsIcon />
              Check Box
            </Link>
            <Link className="subMenu-item" href="/components/CardComponent">
              <ImportContactsIcon />
              Card
            </Link>
            <Link className="subMenu-item" href="/components/CollapseComponent">
              <ImportContactsIcon />
              Collapse
            </Link>
            <Link className="subMenu-item" href="/components/GridComponent">
              <ImportContactsIcon />
              Grid
            </Link>
            <Link className="subMenu-item" href="/components/IconComponent">
              <ImportContactsIcon />
              Icons
            </Link>
            <Link className="subMenu-item" href="/components/TextfiledComponent">
              <ImportContactsIcon />
              Input / Select
            </Link>
            <Link className="subMenu-item" href="/components/ModalComponent">
              <ImportContactsIcon />
              Modal
            </Link>
            <Link className="subMenu-item" href="/components/RadioComponent">
              <ImportContactsIcon />
              Radio
            </Link>
            <Link className="subMenu-item" href="/components/SwitchComponent">
              <ImportContactsIcon />
              Toggle
            </Link>
            <Link className="subMenu-item" href="/components/TableComponent">
              <ImportContactsIcon />
              Table
            </Link>
          </div>









        </div>
      </div>
    </div>
  );
};

export default SubMenu2;
