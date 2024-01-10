import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const DeleteSpecConfirmModal = ({ show, onClose, selectedSpecName }) => {
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
                        <Modal.Title>Вы действительно хотите удалить ВУС &quot;{selectedSpecName}&quot;?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Подтвердите удаление нажатием на кнопку
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => onClose()}>
                            Да, я хочу удалить данную ВУС
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

DeleteSpecConfirmModal.propTypes = {
    onClose: PropTypes.func,
    show: PropTypes.bool,
    selectedSpecName: PropTypes.array,
}

export default DeleteSpecConfirmModal
