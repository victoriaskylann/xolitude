import React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';


export const About = () => {
    return (
        <AboutContainer>
            <Row className='text-section'>
                <Col className='text-container'>
                    <h3>A Photography Portfolio</h3>                    
                    <p>A Showcases of unique collection in panoramic landscape photography from all across the world. steve specializes in panoramic photos that offer an extra wide orientation creates a dramatic statement on any wall</p>
                </Col>
                <Col>
                    <img src='https://myprofilephotos123123.s3.us-west-2.amazonaws.com/pano-mockup.png'/>
                </Col>
            </Row>    
            <Row className='text-section'>
                <Col>
                    <img src='https://myprofilephotos123123.s3.us-west-2.amazonaws.com/photo-display+(2)-small.png'/>
                </Col>
                <Col className='text-container'>
                    <h3>Stunning landscapes</h3>
                    <p>Wherever Steve goes, his camera goes with him: up and down mountains, though the deep valleys, and everywhere is between. He seeks out true wonders and captures the beauty found along the way. </p>
                </Col>
            </Row>   
        </AboutContainer>
    )
}

const AboutContainer = styled.div`
    padding: 50px 10px 100px 10px;
    margin: 0px 50px;
    text-align: left;
    h3{
        font-family: 'Abhaya Libre', 'Tenor Sans', 'Quicksand', Verdana, Geneva, Tahoma, sans-serif;
        font-size: 50px;
        color: #254352;
    }
    p {
        font-family: 'Tenor Sans', 'Quicksand', Verdana, Geneva, Tahoma, sans-serif;
        font-size: 20px;
        width: 80%;
    }
    img {
        width: 40vw;
    }
    .text-section {
        align-items: center;
        justify-content: center;
        display: flex;
        margin-top: 100px;
    }
`

