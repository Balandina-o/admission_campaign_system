import React from "react";
//background:"#111827"
const LogoBar = () => {
  return (
    <nav
      className="navbar"
      style={{ width: "100%", background: "#111827" }}
    >
      <div className="custom-container d-flex align-items-center ps-3">
        <a className="navbar-brand" href="/">
          <img
            src={require("../icons/icon_uust.jpg")}
            height="50"
            alt="UUST logo"
            loading="lazy"
          />
        </a>
        <div style={{ color: "aliceblue" }}>
          ИС приемной кампании УУНиТ | Admission Campaign System
        </div>
      </div>
    </nav>
  );
};

export default LogoBar;
