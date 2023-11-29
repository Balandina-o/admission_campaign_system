import React from "react";

const LogoBar = () => {
  return (
    <nav
      class="navbar navbar-dark bg-dark"
      style={{ position: "fixed", width: "100%" }}
    >
      <div class="custom-container d-flex align-items-center">
        <a class="navbar-brand" href="/">
          <img
            src={require("../icons/icon_uust.jpg")}
            height="50"
            alt="UUST logo"
            loading="lazy"
          />
        </a>
        <div style={{ color: "aliceblue" }}>
          ИС приемной кампании УУНиТ | Admission Campaign System
          {/* <hr style={{ margintop: "1px", marginbottom: "1px" }}></hr> */}
        </div>
      </div>
    </nav>
  );
};

export default LogoBar;
