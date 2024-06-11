import React from "react";
import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { Link } from "react-router-dom";

const StatementsBar = ({ totalScore }) => {
  return (
    <nav
      className="navbar"
      style={{ position: "sticky", top: "0", zIndex: "1", flexgrow: "1", background: "#4d18cb", fontWeight: '600', letterSpacing: '1px' }}
    >
      <div className="custom-container d-flex align-items-center ps-3">
        <div style={{ color: "aliceblue" }}>
          Прикрепленные заявления | Всего: {totalScore}
        </div>
      </div>
      <Link to={'/newStatement'}>
        <Button
          variant="primary"
          style={{ width: "35px", height: "35px", fontSize: "22px", paddingLeft: '11px' }}
          className="bottom-0 end-0 me-3 pt-0"
        >
          +
        </Button>
      </Link>
    </nav>
  );
};

StatementsBar.propTypes = {
  totalScore: propTypes.number,
}

export default StatementsBar;
