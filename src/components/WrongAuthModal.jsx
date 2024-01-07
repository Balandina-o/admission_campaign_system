import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const WrongAuthModal = ({ show, onClose }) => {
    return (
        <div>
            <div>
                <Modal
                    show={show}
                    onHide={() => onClose()}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Внимание! Неверный логин или пароль</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Проверьте корректность вводимых логина и пароля и повторите процедуру авторизации
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => onClose()}>
                            Ок
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

WrongAuthModal.propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool,
    selectedSpecName: PropTypes.string,
}

export default WrongAuthModal
