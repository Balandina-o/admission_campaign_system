import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ExitConfirmModal = ({ show, onClose}) => {
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
            <Modal.Title>Вы действительно хотите осуществить выход из аккаунта?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           Подтвердите выход нажатием на кнопку
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => onClose()}>
              Да, я хочу выйти
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

ExitConfirmModal.propTypes = {
  onClose: PropTypes.func,
  show: PropTypes.bool,
}

export default ExitConfirmModal
