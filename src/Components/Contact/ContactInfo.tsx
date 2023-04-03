import React, { FormEvent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styled from 'styled-components'
import '../../App.css';
import {Container, Col, Row} from 'react-bootstrap';

const defaultFormFields = {
    firstName: '',
    email: '',
    message: ''
}

export const ContactInfo = () =>  {

    return (
        <ContactContainer>
            <Container >
                <Row className="g-0 content-area">
                    <Col md='8' className='left-section'>
                        <br/>
                        <h3 className='contact-label'>Contact Us</h3>
                        <h3 className='subheader'>Photographer:</h3>
                        <p>Steven Black</p>
                        <br/>
                        <h3 className='subheader'>Email:</h3>
                        <p>xolitude@usa.com</p>
                        <h3 className='subheader'>Email:</h3>
                        <p>(801) 602-3210</p>
                    </Col>
                    <Col md='4'>
                        <div className='right-section'>
                            <img  src='https://myprofilephotos123123.s3.us-west-2.amazonaws.com/night-imm.jpg' className='photo-right'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </ContactContainer>
    );
}

const ContactContainer = styled.div`
    min-height: 65vh;
    margin-top: 100px;
    margin-bottom: 100px;
    .content-area {
        height: 60vh;
        position: absolute;
        align-content: center;
        color: #b6b6b6;
    }
    .left-section {
        padding: 40px 40px 90px 90px;
        text-align: left;
        background-color: #1f1f1f;
        height: 60vh;
    }
    .subheader {
        font-size: 24px;
        font-family: 'Abhaya Libre', 'Prata', sans-serif;
    }
    .contact-label {
        font-weight: bold;
        margin-bottom: 30px;
        margin-top: 30px;
        font-size: 40px;
        color: #eeeeee;
    }
    .photo-right {
        width: 40vw;
        margin-left: -50px;
        margin-top: 50px;
    }
    .info-section {
        padding: 30px;
        text-align: left;
        background: #1f1f1f;
        color: #eeeeee;
        position: absolute;
        top: 20%;
        width: 500px;
        margin-left: -300px;

    }
`