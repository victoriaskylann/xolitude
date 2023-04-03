import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import { Modal, Button, Container, Col, Row } from 'react-bootstrap'
import CloseIcon from '../../Icons/CloseIcon'
import { Photo }  from '../../Types/ItemTypes'

type ViewPhotoProps = {
    photo: Photo
    onHide: () => void
    show: boolean
} 

export const ViewPhoto = ({photo, show, onHide}: ViewPhotoProps) =>  {
    return (
            <Modal
                show={show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={onHide}
                className='modal-container'
                dialogClassName="modal-90w"
                
                >
                <ModalBodyContainer>
                        <ButtonContainer>
                            <span className='close-button' onClick={onHide}><CloseIcon/></span>
                        </ButtonContainer>
                        <Row>
                            <Col lg='8'><img className='main-image' src={photo.mediumImage} /></Col>

                            <Col lg='4'>
                                <Row>
                                <h3 className='photo-title'>{photo.title}</h3>
                                <p className='location'> {photo.location}</p>
                                <p> {photo.alt}</p>
                                {/* <p>Photo Options</p> */}
                                </Row>
                                <hr/>
                                <Row>
                                    <p className='purchase-info'>For purchase inquiries please contact Steven at xolitude@usa.com</p>
                                </Row>

                            </Col>

                        </Row>
                </ModalBodyContainer>
            </Modal>
    );
}
const ButtonContainer = styled.div`
    width: 100%;
    text-align: right;
    display: flex;
    align-items: flex-end;
    align-content: flex-end;
    justify-content: end;
    padding-top: 20px;
    margin-bottom: 20px;
`

const ModalBodyContainer = styled.div`
    margin: 0 20px 50px 50px;
    .photo-title {
        font-family: 'Tenor Sans', 'Quicksand', sans-serif;
        padding-top: 10px;
        font-weight: 600;
    }
    .location {
        font-weight: 500;
    }
    .purchase-info {
        font-size: 14px;
        font-style: italic;
        padding-top: 10px;
        font-weight: 300;
    }
`