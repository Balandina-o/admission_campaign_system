import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

const SpecBar = ({ totalScore }) => {
  return (
    <nav
      className="navbar"
      style={{ position: "sticky", top: "0", zIndex: "1", display: "block", flexgrow: "1", background: "#4d18cb", fontWeight: '600', letterSpacing: '1px' }}
    >
      <div className="custom-container d-flex align-items-center ps-3" style={{ paddingBottom: "6px", paddingTop: "6px" }}>
        <div style={{ color: "aliceblue" }}>
          Военные специальности | Всего: {totalScore}
        </div>
      </div>
    </nav>
  );
};

SpecBar.propTypes = {
  totalScore: propTypes.number,
}

export default SpecBar;
