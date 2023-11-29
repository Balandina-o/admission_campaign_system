import React from "react";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
  CDBBtn,
} from "cdbreact";

const SideBar = () => {
  return (
    <CDBSidebar>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        Contrast
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="th-large">
            <CDBBtn color="warning" onClick={alert("hello")}>
              Warning
            </CDBBtn>
          </CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="sticky-note">Components</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="credit-card" iconType="solid">
            Metrics
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default SideBar;
