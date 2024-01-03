import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const StatementsBar = () => {
  return (
    <nav
      className="navbar"
      style={{ position: "fixed", zIndex:"1", width: "58%", background:"#4d18cb",  flexgrow:"1"}}
    >
      <div className="custom-container d-flex align-items-center ps-3">
        <div style={{ color: "aliceblue" }}>
          Прикрепленные заявления
        </div>
      </div>
      <Link to={'/newStatement'}>
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

export default StatementsBar;
