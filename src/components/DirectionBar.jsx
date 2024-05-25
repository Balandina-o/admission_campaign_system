import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DirectionBar = () => {
    return (
        <nav
            className="navbar"
            style={{ position: "sticky", top: "0", zIndex: "1", flexgrow: "1", background: "#4d18cb", fontWeight: '600', letterSpacing: '1px' }}
        >
            <div className="custom-container d-flex align-items-center ps-3">
                <div style={{ color: "aliceblue" }}>
                    Направления подготовки
                </div>
            </div>
            <Link to={'/newDirection'}>
                <Button
                    variant="primary"
                    style={{ width: "35px", height: "35px", fontSize: "16px" }}
                    className="bottom-0 end-0 me-3 pt-0"
                >
                    +
                </Button>
            </Link>
        </nav>
    );
};

export default DirectionBar;
