import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

export const CreateType = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={'Enter new type'}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-danger'} onClick={onHide}>Close</Button>
                <Button variant={'outline-success'} onClick={onHide}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};
