import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App";
import PropTypes from 'prop-types'

// import "../components/css_components/SideBar.css";

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

const SideBar = ({ sideBarVisibility }) => {
  const navigate = useNavigate();
  const { userFromStore } = useContext(Context);
  const [showCreateExitConfirmModal, setShowCreateExitConfirmModal] = useState();

  function closeExitConfirmModal(x) {
    setShowCreateExitConfirmModal(false)
    if (x == "yesImRedyToExit") {
      userFromStore.setLoggedIn(false);
      userFromStore.setIsAdmin(false);
      sideBarVisibility(true); //ПОМЕНЯТЬ НА FALSE
      navigate(`/`)
    }
  }

  // function openPage() {
  //   var link = document.createElement("a")
  //   link.href = "https://uust.ru/vuc/"
  //   link.target = "_blank"
  //   link.click()
  // }

  return (
    <CDBSidebar breakpoint={720} style={{ height: "100vh" }}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <div style={{ display: "flex", fontSize: "10px" }} className="mt-2">
          {/* Добро пожаловать, admin! */}
        </div>
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
            <Link to={'/protocolWindow'}>
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
        {/*<hr></hr>
         <div className="div-bottom">
          <a onClick={openPage}>Просмотреть страницу ВУЦ</a>
        </div> */}
      </CDBSidebarContent>

      <ExitConfirmModal
        show={showCreateExitConfirmModal}
        onClose={(x) => { closeExitConfirmModal(x) }}>
      </ExitConfirmModal>
    </CDBSidebar >

  );
};

SideBar.propTypes = {
  sideBarVisibility: PropTypes.func,
}

export default SideBar;
