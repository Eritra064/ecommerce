import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CustomModal = ({ show, handleClose }) => {
    return ( 
      <Modal
      style={{marginTop: "300px"}}
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Login Successful</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You have successfully logged in!
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
     );
}
 
export default CustomModal;