
import React from 'react'
import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { Photo }  from '../Types/ItemTypes';
import  { Link } from 'react-router-dom'

export const PhotoCarousel = () => {
    const carouselPhotos: Photo[] = [
        {
            id: 127,
            title: 'Winter over the Hoodoos',
            location: 'Bryce Canyon, Utah',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_9986-Pano-med.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/23.01+Bryce+Pano-small.jpg',
            alt: 'Sunset over the hoodoo statues in the snowy winter at Bryce canyon national park',
            width: '4'
        },
        {
            id: 129,
            title: 'Horseshoe Bend Sunset',
            location: 'Page, Arizona',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/20.07+Powell-357+4x6+5MB.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/20.07+Powell-357+4x6-small.jpg',
            alt: 'A uniquely green river bending around a sandstone tower in a horse shoe shape at the east rim of the grand canyon',
            width: '6'
        },
        {
            id: 128,
            title: 'Zion Village',
            location: 'Springdale, Utah',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/16.11+Zion-445-Pano+3x1+5MB.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/16.11+Zion-445-Pano+3x1-small.jpg',
            alt: 'The jagged Red rock mountains found in Zion National Park',
            width: '4'
        }
    ]

    return (
    <CarouselContainer>
        <div className='photo-container'>
        <Carousel slide={false}>
            {carouselPhotos.map((photo) => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo.mediumImage}
                        alt={photo.alt}
                    />
                    <Carousel.Caption>
                        <h1 className='title'>Make you're walls look amazing</h1>
                        <Link to="/gallery" className='nav-link'> <Button variant="outline-light" >View Gallery</Button></Link>
                    </Carousel.Caption>
                </Carousel.Item>

            ))}
        </Carousel>
        </div>
    </CarouselContainer>
    )
}

const CarouselContainer = styled.div`
    background-color: #1f1f1f;
    justify-content: center;
    z-index: 1;
    .carousel .slide { display: flex; justify-content: center; } 
    .carousel-caption {
        top:41%;
    }
    .title {
        padding-bottom: 20px;
        font-family:'terif', 'Abhaya Libre', 'Prata', sans-serif;
        font-weight: 400;
    }
    img {
        height: 90vh;
        object-fit: cover;
    }
`