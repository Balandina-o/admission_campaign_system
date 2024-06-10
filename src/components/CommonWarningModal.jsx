import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const CommonWarningModal = ({ show, onClose, text }) => {
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
                        <Modal.Title>Внимание! Ошибка заполнения</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {text}
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

CommonWarningModal.propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool,
    text: PropTypes.text,
}

export default CommonWarningModal
