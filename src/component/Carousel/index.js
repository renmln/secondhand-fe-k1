import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import carosel1 from '../../images/carosel1.png'
import carosel2 from '../../images/carosel2.png';
import '../../App.css';



export default function CarouselBanner() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div style={{ display: 'block', padding: 30 }} className='karosel col-10 m-auto '>
                    <Carousel>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100 img"
                                src={carosel1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src={carosel2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>

        </div>



    )
}
