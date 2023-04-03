import React , {useState} from 'react'
import styled from 'styled-components'
import {  Col, Row } from 'react-bootstrap'
import { Photo }  from '../../Types/ItemTypes'
import '../../App.css';
import { ViewPhoto } from './ViewPhoto';


export const GalleryNav = () => {
    const photos: Photo[] = [
        {
            id: 124,
            title: 'Winter over the Hoodoos',
            location: 'Bryce Canyon, Utah',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/23.01+Bryce+Pano+5MB.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/23.01+Bryce+Pano-small.jpg',
            alt: 'Sunset over the hoodoo statues in the snowy winter at Bryce canyon national park',
            width: '7'
        },
        {
            id: 134,
            title: 'Pier at Last Light',
            location: 'South Carolina',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_5862.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_5862-small.jpg',
            alt: 'A tall standing pier highlighted by a sunsets beautiful orange clouds framing the boardwalk, accompanied a flock of birds flying above',
            width: '5'
        },
        {
            id: 126,
            title: 'Delicate Arch',
            location: 'Moab, Utah',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/12.09+Moab-239-Edit+4x6+5MB.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/12.09+Moab-239-Edit+4x6+small.jpg',
            alt: 'Delicate Arch catching the bright rays of sunset to create a gorgeous red color against the dark stormy sky in Arches National Park',
            width: '4'
        },
        {
            id: 128,
            title: "Zion's Watchman",
            location: 'Springdale, Utah',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/16.11+Zion-445-Pano+3x1+5MB.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/16.11+Zion-445-Pano+3x1-small.jpg',
            alt: 'The jagged sandstone mountain named The Watchman, which is the highest elevation point found in Zion National Park',
            width: '8'

        },
        {
            id: 130,
            title: 'Rock Canyon Reflection',
            location: 'St George, Utah',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/20.03+St+George-177+2x1+4MB.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/20.03+St+George-177+2x1-small.jpg',
            alt: 'A stunning reflection pond only found after a large rainfall in Snow Canyon State Park',
            width: '8'
        },
        {
            id: 127,
            title: 'Balancing Rock',
            location: 'Moab, Utah',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/12.09+Moab-120-Edit+4x6+5MB.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/12.09+Moab-120-Edit+4x6-smallsh.jpg',
            alt: 'Image of a Bright red rock statue with a seemingly balanced rock on the top of a large column against a dark stormy backdrop',
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
            id: 133,
            title: 'Stormy Shores',
            location: 'South Carolina',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_7099-2.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_7099-2-small.jpg',
            alt: 'a black an white photograph of large waves crashing down on a sandy beach with storm clouds on the horizon, creating a stormy scene',
            width: '6'
        },
        {
            id: 132,
            title: 'Southern Moss Tree',
            location: 'South Carolina',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_6972.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_6972-small.jpg',
            alt: 'An old oak tree covered in moss hanging over the shallow river bank',
            width: '6'
        },   
        // {
        //     id: 131,
        //     title: 'Lighthouse Beach',
        //     location: 'South Carolina',
        //     mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_5416.jpg',
        //     smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_5416-small.jpg',
        //     alt: 'A sandy beach path that leads to the ocean with the light house behind the path',
        //     width: '6'
        // },  
        {
            id: 135,
            title: 'Shades of Dusk',
            location: 'South Carolina',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_5832.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_5832-small.jpg',
            alt: 'A stunning contract of the last light of the sunset lighting up the low looming clouds against the dark beach',
            width: '6'
        },     
        {
            id: 136,
            title: 'Evening tides',
            location: 'South Carolina',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_7026.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_7026-small.jpg',
            alt: 'A stormy sky with clouds that capture the last light of day in a soft orange against the surrounding darkness',
            width: '8'
        },
        {
            id: 137,
            title: 'Sunset over the outer bank',
            location: 'South Carolina',
            mediumImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_5275.jpg',
            smallImage: 'https://xolitude-photos.s3.us-west-2.amazonaws.com/SZ6_5275-small.jpg',
            alt: 'The bright orange sunset reflecting down the outer river bank',
            width: '4'
        },

    ]

    const [modalShow, setModalShow] = React.useState(false);
    const [currentPhoto, setCurrentPhoto] = React.useState(photos[0])

    function showPhotoModal(photo: Photo) {
        setCurrentPhoto(photo)
        setModalShow(true)
    }


    return (
        <GalleryContainer>

            <Row className="g-0 image-row">

                {photos.map((photo) => (
                    <Col md={photo.width}>
                        <div className='gallery-photo' onClick={() => showPhotoModal(photo)}>
                            <img src={photo.smallImage} alt={photo.alt} />
                            <p className='photo-title'>{photo.title}</p>
                        </div>
                    </Col>
                ))}
                </Row>

                <ViewPhoto 
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    photo={currentPhoto}
                />
        </GalleryContainer>
    )
}

const GalleryContainer = styled.div`
    text-align: center;
    padding: 20px 40px 50px 40px;
    background-color: #1f1f1f;
    color: #b8b8b8;

    h2 {
        font-family: 'Abhaya Libre', 'Tenor Sans', 'Quicksand', Verdana, Geneva, Tahoma, sans-serif;
        font-size: 50px;
        color: #254352;
        text-align: left;
    }

    img{
        width: 100%;
        margin-bottom: 10px;
        object-fit: cover;
    }
    .image-row {
        padding: 20px;
    }
    .photo-title {
        text-align: left;
        font-size: 20px;
    }
    .gallery-photo {
        margin: 10px;
    }
`

