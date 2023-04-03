import React from 'react'
import styled from 'styled-components'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../App.css';


export const SampleGallery = () => {
    return (
        <GalleryContainer>
                <Row>
                    <Col>
                        <img src="https://xolitude-photos.s3.us-west-2.amazonaws.com/12.09+Moab-120-Edit+4x6+5MB.jpg" alt="Starry Mountain"/>
                    </Col>
                    <Col>
                        <img src="https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_5862.jpg" alt="Starry Mountain"/>
                    </Col>
                </Row>
                <Row className='button-row'>
                    <div >
                        <Button variant="outline-light" >View More in Gallery</Button> 
                    </div>
                </Row>
        </GalleryContainer>
    )
}

const GalleryContainer = styled.div`
    text-align: center;
    padding: 50px;
    background-color: #1f1f1f;
    color: #dddddd;
    img{
        max-width: 100%;
        margin-bottom: 10px;
    }
    .button-row {
        margin: 50px 20px;
    }
`

