import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import carosel1 from '../../images/carosel1.png'
import carosel2 from '../../images/carosel2.png'


export default function CarouselBanner() {
    return (
        // <div style={{ display: 'block', width: '100%', padding: 30 }}>
        //     <h4>React-Bootstrap Carousel Component</h4>
        //     <Carousel>
        //         <Carousel.Item interval={1500}>
        //             <img
        //                 className="d-block "
        //                 src={carosel1}
        //                 alt="ImageOne"
        //             />
        //             {/* <Carousel.Caption>
        //                 <h3>Label for first slide</h3>
        //                 <p>Sample Text for Image One</p>
        //             </Carousel.Caption> */}
        //         </Carousel.Item>
        //         <Carousel.Item interval={500}>
        //             <img
        //                 className="d-block "
        //                 src={carosel2}
        //                 alt="ImageTwo"
        //             />
        //             {/* <Carousel.Caption>
        //                 <h3>Label for second slide</h3>
        //                 <p>Sample Text for Image Two</p>
        //             </Carousel.Caption> */}
        //         </Carousel.Item>
        //     </Carousel>
        // </div>
        <div style={{ display: 'block', width: 968, height: 188, padding: 30 }} className='m-auto container-fluid'>
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


    )
}
