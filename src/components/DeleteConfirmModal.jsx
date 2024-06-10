import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const DeleteConfirmModal = ({ show, onClose, selectedName, text }) => {
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
                        <Modal.Title> {text} &quot;{selectedName}&quot;?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Подтвердите удаление нажатием на кнопку
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => onClose("yesDelete")}>
                            Удалить
                        </Button>
                        <Button variant="secondary" onClick={() => onClose("no")}>
                            Отмена
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

DeleteConfirmModal.propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool,
    selectedName: PropTypes.array,
    text: PropTypes.string,
}

export default DeleteConfirmModal
