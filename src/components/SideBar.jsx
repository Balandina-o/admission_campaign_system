import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App";

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
  const navigate = useNavigate();
  const { userFromStore } = useContext(Context);
  const [showCreateExitConfirmModal, setShowCreateExitConfirmModal] = useState();

  function closeExitConfirmModal(x) {
    setShowCreateExitConfirmModal(false)
    if (x == "yesImRedyToExit") {
      userFromStore.setLoggedIn(false);
      userFromStore.setIsAdmin(false);
      navigate(`/`)
    }
  }

  return (
    <CDBSidebar breakpoint={720} style={{ height: "100vh" }}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        {/* действия в системе */}
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu >
          <CDBSidebarMenuItem icon="users">
            <Link to={'/statements'}>
              <CDBBtn color="light" style={{ width: "150px" }}>
                Заявления
              </CDBBtn>
            </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="table">
            <Link to={'/spec'}>
              <CDBBtn color="light" style={{ width: "150px" }}>
                Военно-учетные <br />специальности
              </CDBBtn>
            </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="table" iconType="solid">
            <Link to={'/directions'}>
              <CDBBtn color="light" style={{ width: "150px" }}>
                Направления {/*<br/>подготовки */}
              </CDBBtn>
            </Link>
          </CDBSidebarMenuItem>

          <CDBSidebarMenuItem icon="sticky-note" iconType="solid">
            <Link to={'/protocol'}>
              <CDBBtn color="light" style={{ width: "150px" }}>
                Протокол
              </CDBBtn>
            </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note" iconType="solid">
            <Link to={'/report'}>
              <CDBBtn color="light" style={{ width: "150px" }}>
                Отчет
              </CDBBtn>
            </Link>
          </CDBSidebarMenuItem>


        </CDBSidebarMenu>
        <CDBSidebarFooter style={{ textAlign: "center" }}>

          <CDBSidebarMenuItem icon="user" iconType="solid">
            <Link to={'/user'}>
              <CDBBtn color="light" style={{ width: "150px" }}>
                Личный кабинет
              </CDBBtn>
            </Link>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="exit" iconType="solid">
            <CDBBtn color="light" onClick={() => setShowCreateExitConfirmModal(true)} style={{ width: "150px" }}>
              Выйти из аккаунта
            </CDBBtn>
          </CDBSidebarMenuItem>
        </CDBSidebarFooter>
      </CDBSidebarContent>

      <ExitConfirmModal
        show={showCreateExitConfirmModal}
        onClose={(x) => { closeExitConfirmModal(x) }}>
      </ExitConfirmModal>
    </CDBSidebar>

  );
};

export default SideBar;
