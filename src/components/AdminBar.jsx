import React from "react";
import PropTypes from 'prop-types'

const AdminBar = ({ login, role }) => {
    return (
        <nav
            className="navbar"
            style={{ position: "sticky", top: "0", zIndex: "1", display: "block", flexgrow: "1", background: "#4d18cb" }}
        >
            <div className="custom-container d-flex align-items-center ps-3" style={{ paddingBottom: "6px", paddingTop: "6px" }}>
                <div style={{ color: "aliceblue" }}>
                    Добро пожаловать, {login} the {role}!
                </div>
            </div>
        </nav>
    );
};

AdminBar.propTypes = {
    login: PropTypes.string,
    role: PropTypes.string,
}

export default AdminBar;
