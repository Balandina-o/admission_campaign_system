import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SpecialityBar = () => {
  return (
    <nav
      class="navbar"
      style={{ position: "fixed", background:"#4d18cb"}}
    >
      <div class="custom-container d-flex align-items-center ps-3">
        <div style={{ color: "aliceblue" }}>
          Военно-учетные специальности
        </div>
      </div>
      <Link to={'/newSpeciality'}>
      <Button
          variant="primary"
          style={{ width: "35px", height: "35px", fontSize: "16px"}}
          className="bottom-0 end-0 me-3 pt-0"
        >
          +
      </Button>
      </Link>
    </nav>
  );
};

export default SpecialityBar;
