import React from "react";

const SpecBar = () => {
  return (
    <nav
      className="navbar"
      style={{ position: "sticky", top: "0", zIndex: "1", display: "block", flexgrow: "1", background: "#4d18cb" }}
    >
      <div className="custom-container d-flex align-items-center ps-3">
        <div style={{ color: "aliceblue" }}>
          Военные специальности
        </div>
      </div>
    </nav>
  );
};

export default SpecBar;
