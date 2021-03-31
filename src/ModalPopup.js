import React,{useEffect, useState} from 'react';
import Modal from 'react-modal';
import { Button} from 'react-bootstrap';
const ModalPopup =({title ,imgPath,description})=>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect( ()=>{
    console.log("dakhaaal");
    handleShow();
     
    },[]);


    return(
        <Modal  show={show} onHide={handleClose} animation={false}>
             <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
             </Modal.Header>

            <Modal.Body>
                <h3>{title}</h3>
                <img src={imgPath} alt=""/>
                <p>{description}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
            </Modal.Footer>
        </Modal>

    );

};

export default ModalPopup;