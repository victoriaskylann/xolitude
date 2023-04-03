import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../App.css';


export const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Row className='copy-right'>
                    Copyright &copy; 2023, Victoria Skylan
                </Row>
            </Container>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    padding: 20px;
    background-color: #1a1a1a;
    font-size: 12px;
    color: #fff;
    text-align: center;
    margin-left: -12px;
    margin-right: -12px;


    .contact-info {
        text-align: left;
    }

    .copy-right {
        text-align: center;
        display: flex;
        justify-content: center;
        color: #696969;
    }
`

