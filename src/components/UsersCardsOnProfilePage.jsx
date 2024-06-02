import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const UsersCardsOnProfilePage = ({ id, nameUser, lastNameUser, secondNameUser, email, name, role }) => {
    return (
        <div className="p-2 card">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div style={{ padding: 10 }}>
                        {id}
                    </div>
                    <div>
                        <div>
                            {nameUser} {secondNameUser} {lastNameUser} {email}
                        </div>
                        <div>
                            {name} <b>{role}</b>
                        </div>
                    </div>
                </div>

                <div>
                    <Button
                        variant="primary"
                        style={{ width: "35px", height: "35px", fontSize: "11px" }}
                        className="bottom-0 end-0 me-3 fa fa-trash"
                    >
                    </Button>

                    <Button
                        variant="primary"
                        style={{ width: "35px", height: "35px", fontSize: "13px" }}
                        className="bottom-0 end-0 me-3 fa fa-pencil"
                    >
                        &#9998;
                    </Button>

                </div>
            </div>
        </div>
    )
}

UsersCardsOnProfilePage.propTypes = {
    id: PropTypes.number,
    nameUser: PropTypes.string,
    lastNameUser: PropTypes.string,
    secondNameUser: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
}

export default UsersCardsOnProfilePage
