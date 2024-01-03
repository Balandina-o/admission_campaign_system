import React, { useState } from "react";
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

import ExitConfirmModal from "./ExitConfirmModal";

const SideBar = () => {
  const [showCreateExitConfirmModal, setShowCreateExitConfirmModal] = useState();

  function alerty () {
    // alert("warning")
   }

   function exit () {
    setShowCreateExitConfirmModal(true);
    // alert("warning")
   }

  return (
    <CDBSidebar style={{height:"100vh"}}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" /> }>
        {/* действия в системе */}
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu >
          <CDBSidebarMenuItem icon="users">
          <Link to={'/statements'}>
            <CDBBtn color="light" onClick={alerty} style={{ width: "150px" }}>
              Заявления
            </CDBBtn>
            </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="table">
          <Link to={'/spec'}>
          <CDBBtn color="light" onClick={alerty} style={{ width: "150px" }}>
              Военно-учетные <br/>специальности
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="table" iconType="solid">
          <Link to={'/directions'}>
          <CDBBtn color="light" onClick={alerty} style={{ width: "150px" }}>
               Направления {/*<br/>подготовки */}
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>

          <CDBSidebarMenuItem icon="sticky-note" iconType="solid">
          <Link to={'/'}>
          <CDBBtn color="light" onClick={alerty} style={{ width: "150px" }}>
              Протокол
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note" iconType="solid">
          <Link to={'/'}>
          <CDBBtn color="light" onClick={alerty} style={{ width: "150px" }}>
              Отчет
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>


        </CDBSidebarMenu>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
 
          <CDBSidebarMenuItem icon="user" iconType="solid">
          <Link to={'/user'}>
          <CDBBtn color="light" onClick={alerty} style={{ width: "150px" }}>
              Личный кабинет
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="exit" iconType="solid">
          <Link to={'/'}>
          <CDBBtn color="light" onClick={exit} style={{ width: "150px" }}>
             Выйти из аккаунта
            </CDBBtn>
          </Link>
          </CDBSidebarMenuItem>
      </CDBSidebarFooter>
      </CDBSidebarContent>

      <ExitConfirmModal 
        show={showCreateExitConfirmModal}
        onClose={() => setShowCreateExitConfirmModal(false)}>
      </ExitConfirmModal>
    </CDBSidebar>

  );
};

export default SideBar;
