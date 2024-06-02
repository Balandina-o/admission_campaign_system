import React from "react";
import PropTypes from 'prop-types'

const AdminBar = ({ name, role }) => {
    return (
        <nav
            className="navbar"
            style={{ position: "sticky", top: "0", zIndex: "1", display: "block", flexgrow: "1", background: "#4d18cb" }}
        >
            <div className="custom-container d-flex align-items-center ps-3" style={{ paddingBottom: "6px", paddingTop: "6px" }}>
                <div style={{ color: "aliceblue", fontSize: 20, letterSpacing: 1 }}>
                    <b> Личный кабинет | Добро пожаловать, {name} Agafonoff the {role}! </b>
                </div>
            </div>
        </nav>
    );
};

AdminBar.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
}

export default AdminBar;
