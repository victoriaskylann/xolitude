import React from 'react'
import { SampleGallery } from '../Components/Gallery/SampleGallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { PhotoCarousel } from '../Components/PhotoCarousel';
import { About } from '../Components/About';

export const Home = () =>  {
    return (
        <div>
            <PhotoCarousel />  
            <About />
            <SampleGallery />
        </div>
    );
}

