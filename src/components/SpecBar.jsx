import React from "react";

const SpecBar = () => {
  return (
    <nav
      class="navbar"
      style={{ position: "fixed", zIndex:"1", width: "30%", background:"#4d18cb"}}
    >
      <div class="custom-container d-flex align-items-center ps-3">
        <div style={{ color: "aliceblue" }}>
          Военные специальности
        </div>
      </div>
    </nav>
  );
};

export default SpecBar;
