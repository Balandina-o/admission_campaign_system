import React from "react";
import { Link } from "react-router-dom";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
  CDBBtn,
} from "cdbreact";

function alerty () {
 // alert("warning")
}

const SideBar = () => {
  return (
    <CDBSidebar>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" /> }>
        действия в системе
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu >
          <CDBSidebarMenuItem icon="th-large">
          <Link to={'/statements'}>
            <CDBBtn color="light" onClick={alerty}>
              Заявления
            </CDBBtn>
            </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">
          <Link to={'/main'}>
          <CDBBtn color="light" onClick={alerty}>
              Военно-учетные специальности
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
          <Link to={'/'}>
          <CDBBtn color="light" onClick={alerty}>
              Направления подготовки
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>

          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
          <Link to={'/'}>
          <CDBBtn color="light" onClick={alerty}>
              Протоколы
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
          <Link to={'/'}>
          <CDBBtn color="light" onClick={alerty}>
              Отчет
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>


        </CDBSidebarMenu>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
        {/* <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
          Sidebar Footer
        </div> */}
 
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
          <Link to={'/user'}>
          <CDBBtn color="light" onClick={alerty}>
              Личный кабинет
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
          <Link to={'/'}>
          <CDBBtn color="light" onClick={alerty}>
             Выйти из аккаунта
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>
      </CDBSidebarFooter>
      </CDBSidebarContent>

      {/* <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
          Sidebar Footer
        </div>
      </CDBSidebarFooter> */}
    </CDBSidebar>
   
  );
};

export default SideBar;
