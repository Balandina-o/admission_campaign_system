import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const UsersCardsOnProfilePage = ({ id, login, password, role }) => {
    return (
        <div className="p-2 card">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <div>
                        {id}
                    </div>
                    <div>
                        <div>
                            {login}
                        </div>
                        <div>
                            {password} {role}
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
    login: PropTypes.string,
    password: PropTypes.string,
    role: PropTypes.string,
}

export default UsersCardsOnProfilePage
