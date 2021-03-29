import React from 'react';
const ModalPopup =({title ,imgPath,description})=>{


    return(
        <Modal.Dialog>
             <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
             </Modal.Header>

            <Modal.Body>
                <h3>{title}</h3>
                <img src={imgPath}/>
                <p>{description}</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
            </Modal.Footer>
        </Modal.Dialog>

    );

};

export default ModalPopup;