import React, { FormEvent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styled from 'styled-components'
import '../../App.css';
import { InputField } from './InputField';
import {Container, Col, Row} from 'react-bootstrap';

const defaultFormFields = {
    firstName: '',
    email: '',
    message: ''
}

export const ContactForm = () =>  {
    const [formFields, setFormFields] = React.useState(defaultFormFields)
    const {firstName, email, message} = formFields

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formFields)
        resetFormFields()
    }

    // validate email

    // send message to us

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event: React.SyntheticEvent) => {
        console.log('handeling change')
        const target = event.target as HTMLInputElement;

        setFormFields({...formFields, [target.name]: target.value})
    } 



    return (
        <ContactContainer>
            <Container >
                <Row className="g-0 content-area">
                    <Col sm='12' md='6' className='left-section'>
                        <h3 className='contact-label'>Contact Us</h3>
                        <form onSubmit={handleSubmit}>
                            <InputFieldContainer>
                                <div className='group'>
                                    <label className='label'>{'Name'}</label>
                                    <input
                                    type='text' 
                                    name='firstName'
                                    className='input'
                                    onChange={handleChange}
                                    value={firstName} />
                                </div>
                            </InputFieldContainer>
                            <InputFieldContainer>
                                <div className='group'>
                                    <label className='label'>{'Email'}</label>
                                    <input
                                    type='email' 
                                    name='email'
                                    className='input'
                                    onChange={handleChange}
                                    value={email} />
                                </div>
                            </InputFieldContainer>
                            <InputFieldContainer>
                                <label className='label'>Message</label>
                                <textarea rows={5} cols={50} name='message' value={message} className='message' />
                            </InputFieldContainer>
                            <button type='submit' className='button-27'>SEND</button>
                        </form>
                    </Col>
                    <Col sm='12' md='4'>
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
        color: #eeeeee;
    }
    .left-section {
        padding: 40px 40px 90px 90px;
        text-align: left;
        background-color: #1f1f1f;
    }
    /* .right-section {
        /* background-color: #254352; 
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    } */
    .contact-label {
        font-weight: bold;
        margin-bottom: 30px;
        margin-top: 30px;
        font-size: 40px;
        margin-left: 15px;
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

const InputFieldContainer = styled.div`
    text-align: left;
    margin: 15px;
    .label {
        width: 10vw;
        font-size: 15px;
        color: #fff;
    }
    .input {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        border: 1px;
    }
    .message {
        margin-top: 15px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        border: 1px;
    }

`

