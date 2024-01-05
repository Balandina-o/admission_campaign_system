import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from ".//SpecialityBar.module.css";

const SpecialityBar = () => {
  return (
    <nav
      className={classes.navbar}
      style={{ position: "fixed", width: "81.3%", zIndex: "1", display: "block", flexgrow: "1" }}
    >
      <div className=" d-flex align-items-center ps-3">
        <div style={{ color: "aliceblue" }}>
          Военно-учетные специальности
        </div>
        <Link to={'/newSpeciality'}>
          <Button
            variant="primary"
            style={{ width: "35px", height: "35px", fontSize: "16px" }}
            className="bottom-0 end-0 me-3 pt-0"
          >
            +
          </Button>
        </Link>
      </div>
    </nav>
  );
};



export default SpecialityBar;
