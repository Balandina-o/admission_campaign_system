import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SpecialityBar = () => {
  return (
    <nav
      className="navbar"
      style={{ position: "sticky", top: "0", zIndex: "1", flexgrow: "1", background: "#4d18cb", fontWeight: '600', letterSpacing: '1px' }}
    >
      <div className="custom-container d-flex align-items-center ps-3">
        <div style={{ color: "aliceblue" }}>
          Военно-учетные специальности
        </div>
      </div>
      <Link to={'/newSpeciality'}>
        <Button
          variant="primary"
          style={{ width: "35px", height: "35px", fontSize: "22px", marginRight: "18px", paddingLeft: '11px' }}
          className="bottom-0 end-0 pt-0"
        >
          +
        </Button>
      </Link>
    </nav>
  );
};



export default SpecialityBar;
